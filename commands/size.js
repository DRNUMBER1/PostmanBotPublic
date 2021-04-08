module.exports = {
    name: 'size',
    description: "Guesses your pp size!",
    execute(msg, args) {

        let size = Math.floor((Math.random() * 12) + 1);

        if(size < 7){
            msg.channel.send(`Your size is ${size} \n Big PP gang.`)
        } else if (size > 7){
            msg.channel.send(`Your size is ${size} \n Lmao your small kiddo. Go watch some hentai.`)
        }

    }
}