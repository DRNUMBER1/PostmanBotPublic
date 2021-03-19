module.exports = {
    name: 'help',
    description: "Shows a list of commands",
    execute(msg, args){
        const Discord = require("discord.js")

const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
.setTitle("Postman-help")
.setDescription("My prefix is p! All of the commands start with p!")
.addFields(
    { name: 'purchase', value: 'Shows info about Postman++ purchase.' },
    { name: 'ban', value: 'Bans a certain member' },
    { name: 'kick', value: 'Kicks a certain member'},
    { name: 'ping', value: 'Just a Ping Test!'},
    { name: 'website', value: 'Get postman website.'}
)
.setTimestamp()
msg.channel.send(embed)  
    }
}