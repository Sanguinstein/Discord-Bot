const { Channel } = require("discord.js")

module.exports = {
    name: 'pfp',
    description: "for pfp",
    execute(message, args, Discord){
        const user = message.mentions.users.first();
        if(!user) return message.reply('Mention the user. Type `g pfp @user`');
        const member = message.guild.member(user);
        if(!member) return message.reply('Member is not part of this server or you typed incorrectly');
        var facebd = new Discord.MessageEmbed()
        .setTitle('Beautiful....')
        .setColor('#ffdab9')
        .setImage(user.displayAvatarURL({dynamic : true}));
        message.channel.send(facebd);
    }
}