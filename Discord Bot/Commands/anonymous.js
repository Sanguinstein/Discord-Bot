const { Channel } = require("discord.js")

module.exports = {
    name: 'anonymous',
    description: "for suggestions",
    execute(message, args, Discord){
        const channel = message.guild.channels.cache.find(channel => channel.name == 'anonymous'|| channel.name == 'incognito');
        if(!channel) return message.reply('Anonymous channel is not yet ready');
        aarg = args.join(' ');
        var smbd = new Discord.MessageEmbed()
        .setThumbnail('https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png')
        .setAuthor('Anonymous user')
        .setColor('#000001')
        .setDescription(aarg);
        channel.send(smbd).then((msg) =>{
            message.delete();
        }).catch((err) =>{
            throw err;
        });
    }
}