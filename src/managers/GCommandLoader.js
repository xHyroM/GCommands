const Color = require('../structures/Color'), GError = require('../structures/GError'), { Events, ApplicationCommandTypesRaw, ArgumentType } = require('../util/Constants');
const axios = require('axios');
const fs = require('fs');
const ms = require('ms');
const { isClass, __deleteCmd, __getAllCommands, comparable } = require('../util/util');
const Command = require('../commands/base');
/**
 * The GCommandLoader class
 */
class GCommandLoader {
    /**
     * The GCommandLoader class
     * @param {GCommands} GCommandsClient
     */
    constructor(GCommandsClient) {
        /**
         * GCommandsClient
         * @type {GCommands}
        */
        this.GCommandsClient = GCommandsClient;

        /**
         * Client
         * @type {Client}
        */
        this.client = this.GCommandsClient.client;

        /**
         * CmdDir
         * @type {string}
        */
        this.cmdDir = this.GCommandsClient.cmdDir;

        /**
         * All Global Commands
         * @type {Object}
        */
        this._allGlobalCommands = __getAllCommands(this.client);

        this.client._applicationCommandsCache = [];

        this.__loadCommandFiles();
    }

    /**
     * Internal method to loadCommandFiles
     * @returns {void}
     * @private
     */
    async __loadCommandFiles() {
        for await (let file of (await fs.readdirSync(this.cmdDir))) {
            const fileTypeIndex = (file.lastIndexOf('.') - 1 >>> 0) + 2;
            const fileName = file.slice(0, fileTypeIndex - 1);
            const fileType = file.slice(fileTypeIndex);

            if (!['js', 'ts'].includes(fileType)) {
                await this.__loadCommandCategoryFiles(file);
                continue;
            }

            file = await require(`${this.cmdDir}/${file}`);
            if (isClass(file)) {
                file = await new file(this.client);
                if (!(file instanceof Command)) throw new GError('[COMMAND]', `Command ${fileName} doesnt belong in Commands.`);
            }

            file._path = `${this.cmdDir}/${fileName}.${fileType}`;

            this.client.gcommands.set(file.name, file);
            if (file && file.aliases && Array.isArray(file.aliases)) file.aliases.forEach(alias => this.client.galiases.set(alias, file.name));
            this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (File): &e➜   &3${fileName}`, { json: false }).getText());
        }

        await this.__loadSlashCommands();
        await this.__loadContextMenuCommands();
        await this.__loadCommandPermissions();

        this.client.emit(Events.COMMANDS_LOADED, this.client.gcommands);
    }

    /**
     * Internal method to loadCommandCategoryFiles
     * @returns {void}
     * @private
     */
    async __loadCommandCategoryFiles(categoryFolder) {
        for await (let file of (await fs.readdirSync(`${this.cmdDir}/${categoryFolder}`))) {
            const fileName = file.split('.').reverse()[1];
            const fileType = file.split('.').reverse()[0];

            file = await require(`${this.cmdDir}/${categoryFolder}/${file}`);
            if (isClass(file)) {
                file = await new file(this.client);
                if (!(file instanceof Command)) throw new GError('[COMMAND]', `Command ${fileName} doesnt belong in Commands.`);
            }

            file._path = `${this.cmdDir}/${categoryFolder}/${fileName}.${fileType}`;

            this.client.gcommands.set(file.name, file);
            if (file && file.aliases && Array.isArray(file.aliases)) file.aliases.forEach(alias => this.client.galiases.set(alias, file.name));
            this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (File): &e➜   &3${fileName}`, { json: false }).getText());
        }
    }

    /**
     * Internal method to loadSlashCommands
     * @returns {void}
     * @private
     */
    async __loadSlashCommands() {
        if (String(this.client.slash) === 'false') return;

        let keys = Array.from(this.client.gcommands.keys());
        this.__deleteNonExistCommands(keys);

        for (const commandName of keys) {
            const cmd = this.client.gcommands.get(commandName);
            if (String(cmd.slash) === 'false') continue;

            let url = `https://discord.com/api/v9/applications/${this.client.user.id}/commands`;
            if (cmd.guildOnly) url = `https://discord.com/api/v9/applications/${this.client.user.id}/guilds/${cmd.guildOnly}/commands`;

            let ifAlready;
            if (cmd.guildOnly) ifAlready = (await __getAllCommands(this.client, cmd.guildOnly)).filter(c => c.name === cmd.name && c.type === 1);
            else ifAlready = (await this._allGlobalCommands).filter(c => c.name === cmd.name && c.type === 1);

            if (ifAlready.length > 0 && ifAlready[0].description === cmd.description && JSON.stringify(comparable(cmd.args)) === JSON.stringify(comparable(ifAlready[0].options))) {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded from cache (Slash): &e➜   &3${cmd.name}`, { json: false }).getText());
                continue;
            }

            const args = cmd.args ? JSON.parse(JSON.stringify(cmd.args)) : [];

            for (const arg of args) {
                if (arg.args) {
                    if (arg.type === ArgumentType.SUB_COMMAND_GROUP) {
                        for (const subArg of arg.args) {
                            if (subArg.args) {
                                subArg.options = subArg.args;
                                delete subArg.args;
                            }
                        }
                    }
                    arg.options = arg.args;
                    delete arg.args;
                }
            }

            let config = {
                method: 'POST',
                headers: {
                    Authorization: `Bot ${this.client.token}`,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    name: cmd.name,
                    description: cmd.description,
                    options: args,
                    type: 1,
                    default_permission: !!['userRequiredRoles', 'userOnly'].includes(cmd),
                }),
                url,
            };

            axios(config).then(() => {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (Slash): &e➜   &3${cmd.name}`, { json: false }).getText());
            })
            .catch(error => {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] ${error.response.status === 429 ? `&aWait &e${ms(error.response.data.retry_after * 1000)}` : ''} &c${error} &e(${cmd.name})`, { json: false }).getText());

                if (error.response) {
                    if (error.response.status === 429) {
                        setTimeout(() => {
                            this.__tryAgain(cmd, config, 'Slash');
                        }, (error.response.data.retry_after) * 1000);
                    } else {
                        this.GCommandsClient.emit(Events.DEBUG, new Color([
                            '&a----------------------',
                            '  &d[GCommands Debug] &3',
                            `&aCode: &b${error.response.data.code}`,
                            `&aMessage: &b${error.response.data.message}`,
                            '&a----------------------',
                        ]).getText());
                    }
                }
            });
        }
    }

    /**
     * Internal method to loadContextMenuCommands
     * @returns {void}
     * @private
     */
    async __loadContextMenuCommands() {
        if (String(this.client.context) === 'false') return;

        const keys = Array.from(this.client.gcommands.keys());

        for (const commandName of keys) {
            const cmd = this.client.gcommands.get(commandName);
            if (String(cmd.context) === 'false') continue;

            if (cmd.expectedArgs) cmd.args = cmd.expectedArgs;

            let url = `https://discord.com/api/v9/applications/${this.client.user.id}/commands`;
            if (cmd.guildOnly) url = `https://discord.com/api/v9/applications/${this.client.user.id}/guilds/${cmd.guildOnly}/commands`;

            let ifAlready;
            if (cmd.guildOnly) ifAlready = (await __getAllCommands(this.client, cmd.guildOnly)).filter(c => c.name === cmd.name && [2, 3].includes(c.type));
            else ifAlready = (await this._allGlobalCommands).filter(c => c.name === cmd.name && [2, 3].includes(c.type));

            if (ifAlready.length > 0 && ifAlready[0].name === cmd.name) {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded from cache (Context Menu): &e➜   &3${cmd.name}`, { json: false }).getText());
                continue;
            }

            let type = cmd.context ? ApplicationCommandTypesRaw[cmd.context] : ApplicationCommandTypesRaw[this.client.context];
            let config = {
                method: 'POST',
                headers: {
                    Authorization: `Bot ${this.client.token}`,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    name: cmd.name,
                    type: type === 4 ? 2 : type,
                }),
                url,
            };

            axios(config).then(() => {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (Context Menu (user)): &e➜   &3${cmd.name}`, { json: false }).getText());
                if (type === 4) {
                    config.data = JSON.parse(config.data);
                    config.data.type = 3;
                    config.data = JSON.stringify(config.data);
                    this.__tryAgain(cmd, config, 'Context Menu (message)');
                }
            })
            .catch(error => {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] ${error.response.status === 429 ? `&aWait &e${ms(error.response.data.retry_after * 1000)}` : ''} &c${error} &e(${cmd.name})`, { json: false }).getText());

                if (error.response) {
                    if (error.response.status === 429) {
                        setTimeout(() => {
                            this.__tryAgain(cmd, config, 'Context Menu');
                        }, (error.response.data.retry_after) * 1000);
                    } else {
                        this.GCommandsClient.emit(Events.DEBUG, new Color([
                            '&a----------------------',
                            '  &d[GCommands Debug] &3',
                            `&aCode: &b${error.response.data.code}`,
                            `&aMessage: &b${error.response.data.message}`,
                            '&a----------------------',
                        ]).getText());
                    }
                }
            });
        }
    }

    /**
     * Internal method to loadCommandPermissions
     * @returns {void}
     * @private
     */
    async __loadCommandPermissions() {
        const keys = Array.from(this.client.gcommands.keys());

        for (const commandName in keys) {
            const cmd = this.client.gcommands.get(keys[commandName]);
            const allKeys = Object.keys(cmd);

            if (!['userRequiredRoles', 'userOnly'].some(o => allKeys.includes(o))) return;

            let apiCommands = cmd.guildOnly ? (await __getAllCommands(this.client, cmd.guildOnly)).filter(c => c.name === cmd.name) : (await this._allGlobalCommands).filter(c => c.name === cmd.name);

            for (const apiCommand of apiCommands) {
                if (![1].includes(apiCommand.type)) return;

                let url = `https://discord.com/api/v9/applications/${this.client.user.id}/commands/${apiCommand.id}/permissions`;
                if (cmd.guildOnly) url = `https://discord.com/api/v9/applications/${this.client.user.id}/guilds/${cmd.guildOnly}/commands/${apiCommand.id}/permissions`;

                let finalData = [];

                if (cmd.userRequiredRoles) {
                    if (!Array.isArray(cmd.userRequiredRoles)) cmd.userRequiredRoles = [cmd.userRequiredRoles];

                    for await (const roleId of cmd.userRequiredRoles) {
                        finalData.push({
                            id: roleId,
                            type: 1,
                            permission: true,
                        });
                    }
                }

                if (cmd.userOnly) {
                    if (!Array.isArray(cmd.userOnly)) cmd.userOnly = [cmd.userOnly];

                    for await (const userId of cmd.userOnly) {
                        finalData.push({
                            id: userId,
                            type: 2,
                            permission: true,
                        });
                    }
                }

                let config = {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bot ${this.client.token}`,
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify({
                        permissions: finalData,
                    }),
                    url,
                };

                axios(config).then(() => {
                    this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (Permission): &e➜   &3${cmd.name}`, { json: false }).getText());
                })
                .catch(error => {
                    this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] ${error.response.status === 429 ? `&aWait &e${ms(error.response.data.retry_after * 1000)}` : ''} &c${error} &e(${cmd.name})`, { json: false }).getText());

                    if (error.response) {
                        if (error.response.status === 429) {
                            setTimeout(() => {
                                this.__tryAgain(cmd, config, 'Permission');
                            }, (error.response.data.retry_after) * 1000);
                        } else {
                            this.GCommandsClient.emit(Events.DEBUG, new Color([
                                '&a----------------------',
                                '  &d[GCommands Debug] &3',
                                `&aCode: &b${error.response.data.code}`,
                                `&aMessage: &b${error.response.data.message}`,
                                '&a----------------------',
                            ]).getText());
                        }
                    }
                });
            }
        }
    }

    /**
     * Internal method to tryAgain
     * @returns {void}
     * @private
    */
    __tryAgain(cmd, config, type) {
        axios(config).then(() => {
            this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] &aLoaded (${type}): &e➜   &3${cmd.name}`, { json: false }).getText());
        })
            .catch(error => {
                this.GCommandsClient.emit(Events.LOG, new Color(`&d[GCommands] ${error.response.status === 429 ? `&aWait &e${ms(error.response.data.retry_after * 1000)}` : ''} &c${error} &e(${cmd.name})`, { json: false }).getText());

                if (error.response) {
                    if (error.response.status === 429) {
                        setTimeout(() => {
                            this.__tryAgain(cmd, config, type);
                        }, (error.response.data.retry_after) * 1000);
                    }
                }
            });
    }

    /**
     * Internal method to deleteNonExistCommands
     * @returns {void}
     * @private
     */
    async __deleteNonExistCommands(commandFiles) {
        let allSlashCommands = await __getAllCommands(this.client);
        if (!allSlashCommands || allSlashCommands.length < 0) return;

        if (String(this.client.slash) === 'false') allSlashCommands.forEach(cmd => __deleteCmd(this.client, cmd.id));

        for (let slashCmd of allSlashCommands) {
            if (!commandFiles.some(c => slashCmd.name === c)) __deleteCmd(this.client, slashCmd.id);
            if (this.client.gcommands.get(slashCmd.name) && String(this.client.gcommands.get(slashCmd.name).slash) === 'false') __deleteCmd(this.client, slashCmd.id);
        }

        console.log(new Color('&d[GCommands TIP] &3Are guild commands not deleted when you delete them? Use this site for remove &ehttps://gcommands-slash-gui.netlify.app/').getText());
    }
}

module.exports = GCommandLoader;
