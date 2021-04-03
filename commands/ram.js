module.exports = {
    name: 'ram',
    description: "Issue help",
    execute(client, msg, args) {
        const Discord = require("discord.js")

        const embed = new Discord.MessageEmbed()
            .setTitle("ram issue")
            .setDescription(`Ram issue is an issue often caused by insufficient ram given to minecraft.\n You can fix it by changing the ram option in your installation.`)
            .setImage("https://downloads.intercomcdn.com/i/o/271448637/d80438bdec511cec81fb7e22/uJ6VvOg.gif")
            .setTimestamp()
        msg.channel.send(embed)
    }
}