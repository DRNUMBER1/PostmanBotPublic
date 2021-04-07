module.exports = {
    name: 'kick',
    description: "This command kicks a member",
    execute(client, msg, args) {
       if (!msg.member.hasPermission("ADMINISTRATOR") || client.users.cache.find(user => user.id === '249347998742609923')) {
            return msg.reply("You don't have permission to do that.");
        }

        const target = msg.mentions.users.first();

        if (target) {
            const memberTarget = msg.guild.members.cache.get(target.id);
             try {memberTarget.kick();
            } catch {
                msg.channel.send("I dont have perms to do that action!");
            }
            let banReason = args.join(" ").slice(22);
            if (!banReason) {
                banReason = "None"
            }

            msg.channel.send("This Boi got L'd by Postman++");

        } else {
            msg.channel.send('Mention the Post to kick lol <p!kick @someone>');

        }

    }


}