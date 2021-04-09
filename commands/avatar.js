const discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Shows someone's avatar!",
    execute(msg, args) {

        const useravatar =  msg.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle(`Showing avatar for ${useravatar}`)
        .setAuthor(msg.author)
        .setImage(useravatar.avatarURL)
        msg.channel.send(embed)




    }
}