const Discord = require('discord.js');
module.exports = {
    name: 'support',
    description: "Support Postmanbot",
    execute(client, msg, args) {


        const embed = new Discord.MessageEmbed()
        .setTitle("Support Postman Bot!")
        .setDescription("You can support postman bot by starring it on github. :3!")
        .addField("_Github_", "https://github.com/DRNUMBER1/PostmanBotPublic", false)
        msg.channel.send(embed);



    }
}