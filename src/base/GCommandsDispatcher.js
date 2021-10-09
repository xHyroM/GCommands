const { Collection, Team } = require('discord.js');
const Color = require('../structures/Color');

const ms = require('ms');

/**
 * The GCommansDispatcher class
 */
class GCommandsDispatcher {
    /**
     * The GCommansDispatcher class
     * @param {GCommandsClient} GCommandsClient
     */
    constructor(client, readyWait = true) {
        /**
         * Client
         * @type {GCommandsClient}
         */
        this.client = client;

        /**
         * Inhibitors
         * @type {Set}
        */
        this.inhibitors = new Set();

        /**
         * Cooldowns
         * @type {Collection}
        */
        this.cooldowns = new Collection();

        /**
         * Application
         * @type {ClientApplication}
        */
        this.application = null;

        this.client.inhibitors = this.inhibitors;
        this.client.cooldowns = this.cooldowns;

        if (readyWait) {
            setImmediate(() => {
                this.client.on('ready', () => {
                    this.fetchClientApplication();
                });
            });
        }
    }

    /**
     * Internal method to setGuildPrefix
     * @param {Snowflake} guildId
     * @param {string|Array} prefix
     * @returns {boolean}
    */
    async setGuildPrefix(guildId, prefix) {
        if (!this.client.database) return false;

        const guildData = await this.client.database.get(`guild_${guildId}`) || {};
        guildData.prefix = !Array.isArray(prefix) ? Array(prefix) : prefix;

        this.client.database.set(`guild_${guildId}`, guildData);
        this.client.guilds.cache.get(guildId).prefix = guildData.prefix;

        return true;
    }

    /**
     * Internal method to getGuildPrefix
     * @param {Snowflake} guildId
     * @param {boolean} cache
     * @returns {string}
    */
    async getGuildPrefix(guildId, cache = true) {
        if (!Array.isArray(this.client.prefix)) this.client.prefix = Array(this.client.prefix);

        if (!this.client.database) return this.client.prefix;

        const guild = this.client.guilds.cache.get(guildId);
        if (guild && guild.prefix && !Array.isArray(guild.prefix)) guild.prefix = Array(guild.prefix);
        else cache = false;

        if (cache) return guild.prefix ? guild.prefix : this.client.prefix;

        const guildData = await this.client.database.get(`guild_${guildId}`) || {};
        if (guildData.prefix && !Array.isArray(guildData.prefix)) guildData.prefix = Array(guildData.prefix);

        return guildData ? guildData.prefix || this.client.prefix : this.client.prefix;
    }

    /**
     * Internal method to getCooldown
     * @param {Snowflake} guildId
     * @param {Snowflake} userId
     * @param {Command} command
     * @returns {string}
    */
    async getCooldown(guildId, userId, command) {
        if (this.application && this.application.owners.some(user => user.id === userId)) return { cooldown: false };
        const now = Date.now();

        let cooldown;
        if (typeof command.cooldown === 'object') cooldown = command.cooldown ? ms(command.cooldown.cooldown) : ms(this.client.defaultCooldown);
        else cooldown = command.cooldown ? ms(command.cooldown) : ms(this.client.defaultCooldown);

        if (cooldown < 1800000 || !this.client.database) {
            if (!this.client.cooldowns.has(command.name)) this.client.cooldowns.set(command.name, new Collection());

            const timestamps = this.client.cooldowns.get(command.name);

            if (timestamps.has(userId)) {
                if (timestamps.has(userId)) {
                    const expirationTime = timestamps.get(userId) + cooldown;

                    if (now < expirationTime) {
                        if (typeof command.cooldown === 'object' && command.cooldown.agressive) {
                            this.client.cooldowns.set(command.name, new Collection());
                            return { cooldown: true, wait: ms(cooldown) };
                        }

                        const timeLeft = ms(expirationTime - now);

                        return { cooldown: true, wait: timeLeft };
                    }
                }
            }

            timestamps.set(userId, now);
            setTimeout(() => timestamps.delete(userId), cooldown);
            return { cooldown: false };
        }

        if (!this.client.database || !command.cooldown) return { cooldown: false };

        const guildData = await this.client.database.get(`guild_${guildId}`) || {};
        if (!guildData.users) guildData.users = {};
        if (!guildData.users[userId]) guildData.users[userId] = guildData.users[userId] || {};

        let userInfo = guildData.users[userId][command.name];

        if (!userInfo) {
            guildData.users[userId][command.name] = ms(command.cooldown) + now;

            userInfo = guildData.users[userId][command.name];
            this.client.database.set(`guild_${guildId}`, guildData);
        }

        if (now < userInfo) {
            if (typeof command.cooldown === 'object' && command.cooldown.agressive) {
                guildData.users[userId][command.name] = ms(command.cooldown) + now;

                userInfo = guildData.users[userId][command.name];
                this.client.database.set(`guild_${guildId}`, guildData);

                return { cooldown: true, wait: ms(cooldown) };
            }

            return { cooldown: true, wait: ms(userInfo - now) };
        } else {
            guildData.users[userId] = guildData.users[userId] || {};
            guildData.users[userId][command.name] = undefined;

            this.client.database.set(`guild_${guildId}`, guildData);
        }

        return { cooldown: false };
    }

    /**
     * Internal method to setGuildLanguage
     * @param {Snowflake} guildId
     * @param {string} lang
     * @returns {boolean}
    */
    async setGuildLanguage(guildId, lang) {
        if (!this.client.database) return false;

        const guildData = await this.client.database.get(`guild_${guildId}`) || {};
        guildData.language = lang;

        this.client.database.set(`guild_${guildId}`, guildData);
        this.client.guilds.cache.get(guildId).language = guildData.language;

        return true;
    }

    /**
     * Internal method to getGuildLanguage
     * @param {Snowflake} guildId
     * @param {boolean} cache
     * @returns {boolean}
    */
    async getGuildLanguage(guildId, cache = true) {
        if (!this.client.database) return this.client.language;

        const guild = this.client.guilds.cache.get(guildId);
        if (!guild || !guild.language) cache = false;

        if (cache) return guild.language ? guild.language : this.client.language;

        const guildData = await this.client.database.get(`guild_${guildId}`) || {};
        return guildData ? guildData.language || this.client.language : this.client.language;
    }

    /**
     * Internal method to fetchClientApplication
     * @private
     * @returns {Array}
    */
    async fetchClientApplication() {
        this.application = await this.client.application.fetch();

        if (this.application.owner === null) this.application.owners = [];

        if (this.application.owner instanceof Team) {
            this.application.owners = [...this.application.owner.members.values()].map(teamMember => teamMember.user);
        } else { this.application.owners = [this.application.owner]; }

        return this.application.owners;
    }

    /**
     * Method to addInhibitor
     * @param {Inhibitor} inhibitor
     * @returns {boolean}
    */
    addInhibitor(inhibitor) {
        if (typeof inhibitor !== 'function') return console.log(new Color('&d[GCommands] &cThe inhibitor must be a function.').getText());
        if (this.client.inhibitors.has(inhibitor)) return false;
        this.client.inhibitors.add(inhibitor);
        return true;
    }

    /**
     * Method to removeInhibitor
     * @param {Inhibitor} inhibitor
     * @returns {Set}
    */
    removeInhibitor(inhibitor) {
        if (typeof inhibitor !== 'function') return console.log(new Color('&d[GCommands] &cThe inhibitor must be a function.').getText());
        return this.client.inhibitors.delete(inhibitor);
    }
}

module.exports = GCommandsDispatcher;
