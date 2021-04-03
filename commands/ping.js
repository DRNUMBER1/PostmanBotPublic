module.exports = {
    name: 'ping',
    description: "Ping",
    execute(client, msg, args) {
        msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. Postman Fast 🏃‍♂️!`);
    }
}