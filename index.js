const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

//const yeet = Math.floor((Math.random() * 10000) + 1);

client.on('ready', () => {
    console.log('Hey Smart Boi I am on!')
    client.user.setActivity(`Playing with postman++ | +help for commands`, {
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
    if (command.length == 0) return;
    const cmd = client.commands.get(command)
    if (cmd) cmd.execute(client, msg, args)
});

client.login(token);