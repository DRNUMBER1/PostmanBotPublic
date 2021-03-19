module.exports = {
    name: 'ping',
    description: "Ping",
    execute(msg, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();

        msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. Postman Fast 🏃‍♂️!`);
    }
}