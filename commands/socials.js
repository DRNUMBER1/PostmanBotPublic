const Discord = require('discord.js')

module.exports = {
    name: 'socials',
    description: "Shows postman socials.",
    execute(client, msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Postman Socials")
        .addField("__Website__", "https://techale.github.io/postman-website", false)
        .addField("__Github__", "https://github.com/moomooooo", false)
        .addField("__Discord__", "https://discord.gg/Mzy7Q3Fc4B", false)
        msg.channel.send(embed);
    }
}