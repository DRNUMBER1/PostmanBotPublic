module.exports = {
    name: 'purchase',
    description: "Purchase info of Postman++",
    execute(msg, args) {

        const Discord = require("discord.js")

        const embed = new Discord.MessageEmbed()
            .setTitle("Check in Postmans Discord server in #info in Postman++ category")
            .setDescription("postman++ is a paid version of postman for $5, this is merely a donation, this client only really features a few exclusive modules listed below. after purchasing the client, you will receive...")
            .addFields(
                        {name: "-postman pack", value:"An exclusive texture pack made for postman++ users."},
                        {name: "-releases of postman++", value: "lol ofcource you will get all releases of postman++."},
                        {name: "-your postman++ cape", value: "A special cape for postman++ users (hint: use p!cape to preview this cape)."},
                        {name: "-your postman++ discord and irc role", value: "A custom Discord role in Postman server with a exclusive Discord RPC."},
                        {name: "Discord Link", value:"https://discord.gg/RvXHwesD8g"}
                        ) 
             
            .setTimestamp()
            msg.channel.send(embed)  
       
    }

}