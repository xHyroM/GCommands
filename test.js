const Discord = require("discord.js");
const client = new Discord.Client();
const { GCommands } = require("./src/index");
const axios = require("axios")

client.on("ready", () => {
    new GCommands(client, {
        cmdDir: "commands",
        eventDir: "events", //when you want event handler
        language: "czech", //english, spanish, portuguese, russian, german, czech, slovak
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' 
        },
        cooldown: {
            default: 3
        },
        database: {
            type: "mongodb", //sqlite/mongodb
            url: "mongodb+srv://" //mongourl
        }
    })

    client.user.addInhibitor((slash, message) => {
        if(message && message.author.id == "126454") {
            message.channel.send("blacklisted")
            return false;
        }

        if(slash && slash.member.user.id == "126454")
            client.api.interactions(slash.id, slash.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        flags: 64,
                        content: "blacklisted"
                    }
                }
            });
    })
})

client.on("gDebug", (debug) => {console.log(debug)})

client.login("NzQ1NTk5NjQ4MTEwMjE1MjYw.Xz0HyA.ySFQmOxQLNnfvmR7gqBlfUsJmC8")