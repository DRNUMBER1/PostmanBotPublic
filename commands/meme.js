module.exports = {
    name: 'meme',
    description: "Shows a meme!",
    execute(msg, args) {
        const cheerio = require('cheerio');
        const request = require('request');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        function image(msg) {
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + "meme",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function (error, response, responsebody) {
                if (error) {
                    return;
                }
                $ = cheerio.load(responsebody);
                var links = $(".image a.link");
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                console.log(urls);
                if (!urls.length) {
                    return;
                }
                msg.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            });
        
        }
        image(msg);

    }
}
