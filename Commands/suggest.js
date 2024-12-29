const { Channel } = require("discord.js")

module.exports = {
    name: 'suggest',
    description: "for suggestions",
    execute(message, args, Discord){
        const channel = message.guild.channels.cache.find(channel => channel.name == '・suggestions' || channel.name == 'suggestions');
        if(!channel) return message.reply('Suggestions channel is not yet ready');
        aarg = args.join(' ');
        var smbd = new Discord.MessageEmbed()
        .setAuthor('Suggestion by a user')
        .setThumbnail('https://cdn-icons-png.flaticon.com/128/4228/4228956.png')
        .setColor('#fff68f')
        .setDescription(aarg);
        channel.send(smbd).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) =>{
            throw err;
        });
    }
}