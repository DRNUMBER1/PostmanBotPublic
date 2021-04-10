const fetch = require("node-fetch")
const Discord = require('discord.js');

module.exports = {
    name: 'h3nta1',
    description: "Sends a thing to work on!",
    async execute(client, msg, args) {
      if(!msg.channel.nsfw){
      msg.channel.send("This is not a NSFW channel!")
      } else if (msg.channel.nsfw){
        //const text = args.slice(1, args.length).join(' ');

        let sub = "https://www.reddit.com/r/hentai/top/.json?sort=top&t=day&limit=100";
        let limit = sub.split('limit=')[1];
        const res = await fetch("https://www.reddit.com/r/hentai/top/.json?sort=top&t=day&limit=100")
        .then(res => res.json())
        .then(json => {
            return json
        });

        const posts = res.data.children.filter(post => post.data.post_hint === 'image');
        const post = posts[Math.floor(Math.random() * Number(limit) - 1)];

        const embed = new Discord.MessageEmbed()
        .setImage(post.data.url)
        .setFooter(`👍 ${post.data.ups} - 💬 ${post.data.num_comments} | ${post.data.subreddit}`)
        .setDescription(post.data.selftext)
        .setTitle(post.data.title)
        .setURL(`https://www.reddit.com${post.data.permalink}`)

        msg.channel.send(embed);
      }
    }
}
