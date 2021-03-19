const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';
const config = require("./config.json");
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

const yeet = Math.floor((Math.random() * 10000) + 1);

client.on('ready', () => {
    console.log('Hey Smart Boi I am on!')
    client.user.setActivity(`Playing with Postman++ YEET || ${yeet} YEETED`, {
        type: "PLAYING"
      });
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    if ( msg.author.id === "763222360199004212") {
        msg.reply(" LMAO Kid I hate you XD 🖐️😂!")
    }

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(msg, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(msg, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(msg, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(msg, args);
    } else if (command === 'autoarmor') {
        client.commands.get('aA').execute(msg, args);
    } else if (command === 'cape') {
        client.commands.get('cape').execute(msg, args);
    } else if (command === 'purchase') {
        client.commands.get('purchase').execute(msg, args);
    } else if (command === 'website') {
        client.commands.get('website').execute(msg, args);
    } else if (command === 'meme') {
        client.commands.get('meme').execute(msg, args);
    } else if (command === 'anime') {
        client.commands.get('anime').execute(msg, args);
    } else if (command === 'ram') {
        client.commands.get('ram').execute(msg, args);
    } else if (command === 'noanime') {
        client.commands.get('noanime').execute(msg, args);
    } else if (command === 'mc') {
        client.commands.get('mc').execute(msg, args);
    } else if (command === 'uwu') {
        client.commands.get('uwu').execute(msg, args);
    } else if (command === 'roll') {
        client.commands.get('roll').execute(msg, args);
    }else if (command === 'gay') {
        client.commands.get('ga').execute(msg, args);
    }
});

client.login(config.token);