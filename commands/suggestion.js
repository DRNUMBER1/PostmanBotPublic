module.exports = {
    name: 'suggestion',
    description: "Reacts at a suggestion",
    execute(client, msg, args) {

        let suggest = agrs[0];

        if (!suggest) {
            msg.channel.send("please provide the suggestion!") 
        } else if(suggest) {
            msg.react('👍');
            msg.react('👎');
        }
        
    }
}