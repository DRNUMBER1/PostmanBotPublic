const Discord = require("discord.js")
const { prefix } = require('../config.json')

module.exports = {
    name: 'help',
    description: "Shows a list of commands",
    async execute(client, msg, args) {
        const table = [];
        const { commands } = msg.client

        if (!args.length) {
            table.push(`\`${prefix}` + commands.map(c => c.name).join(`\`, \`${prefix}`) + '`')
            table.push(`\nYou can use ${prefix}help [command name] to get info about a specific command.`)

            const embed = new Discord.MessageEmbed()
            .setTitle(`Postman Help`)
            .setDescription(`My prefix is **${prefix}** for all commands.`)
            .addField(`Commands\n`, table, false)
            .setTimestamp()
            msg.channel.send(embed)

            return;
        }

        const name = args[0];
        const command = commands.get(name)

        if (!command) {
            msg.channel.send(`"${this.name}" is not a valid command.`).then(async (e) => {
                await e.delete({ timeout: 5000 })
            })

            return
        }

        table.push(`Name: ${command.name}`);
        table.push(`Description: ${command.description}`);

        const embed = new Discord.MessageEmbed()
        .setTitle(`${cap(command.name)} Command`)
        .setDescription(table)
        .setTimestamp()
        msg.channel.send(embed)
    }
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}