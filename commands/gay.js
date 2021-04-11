module.exports = {
    name: 'gay',
    description: "Are you?",
    execute(client, msg, args) {

        var roll1 = Math.floor((Math.random() * 101) + 1);

        if(msg.author.id === "249347998742609923") {
            msg.channel.send("You are 99% Gay!");
        } else if(roll1 === 69) {
            msg.channel.send(`${msg.author.ping} How thoooo you got ${roll1}% :flushed: !`);
        } else {
            const Discord = require("discord.js")

            const embed = new Discord.MessageEmbed()
                .setTitle("Recior's Gay-o-Meter")
                .setDescription(`Your ${roll1}% Gay!`)
                .setThumbnail("https://cdn.discordapp.com/attachments/775146810062274581/821752859371896832/Z.png")
                .setTimestamp()
            msg.channel.send(embed);
        }

    }
}
