module.exports = {
    name: 'cape',
    description: "Shows Cape of postman++",
    execute(client, msg, args) {
        const Discord = require("discord.js")

        const embed = new Discord.MessageEmbed()
            .setTitle("Cape")
            .setDescription("A cape received by Postman++ players")
            .setDescription("Requires Player's uuid to work")
            .setThumbnail("https://cdn.discordapp.com/attachments/736637799897235472/815430974086053929/3.png")
            .setTimestamp()
        msg.channel.send(embed)
    }
}