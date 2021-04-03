module.exports = {
    name: 'aA',
    description: "A module",
    execute(client, msg, args) {
        const Discord = require("discord.js")

        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
            .setTitle("autoArmor")
            .setDescription("automatically equips the best armor in ur inventory")
            .setTimestamp()
        msg.channel.send(embed)
    }
}