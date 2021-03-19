module.exports = {
    name: 'roll',
    description: "Pings a certains server!",
    execute(msg, args) {
        var roll1 = Math.floor((Math.random() * 10) + 1);
        var roll2 = Math.floor((Math.random() * 10) + 1);

        if(msg.author.id === "533112545465073685" || "249347998742609923") {
            msg.channel.send("Master Your luck is beyond my Imagination!");
        } else if(roll1 === roll2) {
            msg.channel.send(`${msg.author.ping} You are a Lucky Guy My number is ${roll1} Your was ${roll2}!`);
        } else {
            msg.channel.send(`You are not so Lucky Guy My number was ${roll1} Your is ${roll2}!`);
        }
    }

}