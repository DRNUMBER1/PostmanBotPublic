module.exports = {
    name: 'mc',
    description: "Pings a certains server!",
    execute(client, msg, args) {
        const ping = require('minecraft-server-util')

        if(!args[1]) return msg.channel.send('Pls Type Ip uwu')
            if(!args[2]) return msg.channel.send('Pls Type Port OWVW')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error

                const embed = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                
                msg.channel.send(embed)
            })  
       
    }

}