const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db");
require("discord-reply");
const client = new discord.Client();

module.exports = {
    name: "use",
    category: "economy",
    description: "Use A Item",
    usage: "use <item_name>",
    
    run: async (client, message, args) => {
    
        let use = new MessageEmbed()
        .setDescription("Hi User, This Command Is Currently On Update...")
        .setFooter("CW Official Bot")
        .setColor("RED")
        
        return message.channel.send(use)
    }
}