module.exports = {
    name: 'ban',
    description: "This command bans a member",
    execute(msg, args){
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
            return msg.reply("You don't have permission to do that.");
        }

        const target = msg.mentions.users.first();

        if (target) {
            const memberTarget = msg.guild.members.cache.get(target.id);
             try {memberTarget.ban();
            } catch {
                msg.channel.send("I dont have perms to do that action!");
            }
            let banReason = args.join(" ").slice(22);
            if (!banReason) {
                banReason = "None"
            }

            msg.channel.send("This Boi got L'd by Postman++ (if i got perms XP)");

        } else {
            msg.channel.send('Mention the Post to ban lol <p!kick @someone>');

        }

    }
}
