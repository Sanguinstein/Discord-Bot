const { Channel } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "for testing",
    execute(message, args, Discord, client) {

        user = message.mentions.users.first();
        if (!user) {
            message.channel.send("Testing message.").then(() =>{
                client.users.cache.get('756245122324234448').send(`${message.author.username} needs your help.`)
            }).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. This is what happened: ${error}`))
            return;
        }
        target = message.guild.member(user);
        if (!target) return message.reply('That person is not in the server');
        let reason = args[1];
        if (!reason) return message.reply('provide a reason').catch(error => message.Channel.send(`${error}`));

        sss = args[2];
        if (!sss) return message.channel.send(`${reason}`);
        message.channel.send(`${reason} ${sss}`);
    }
}