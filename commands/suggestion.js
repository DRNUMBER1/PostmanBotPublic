module.exports = {
    name: 'suggestion',
    description: "Reacts at a suggestion",
    execute(client, msg, args) {

        let suggest = args[0];

        if (!suggest) {
            msg.channel.send("please provide the suggestion!").then(async (e) => {
                await e.delete({
                    timeout: 5000
                })
            })
            return;

        } else {
            msg.react('👍');
            msg.react('👎');
        }
    }
}
