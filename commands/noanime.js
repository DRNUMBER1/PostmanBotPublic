module.exports = {
    name: 'noanime',
    description: "does exactly what it should!",
    execute(client, msg, args) {
        const cheerio = require('cheerio');
        const request = require('request');

        function image(msg) {
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + "death to the mpla",
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