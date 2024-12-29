const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'pfp',
    description: "Get the profile picture of a mentioned user.",
    execute(message, args) {

        const user = message.mentions.users.first();
        if (!user) 
            return message.reply('Please mention a user. Use `Gpfp @user`.');

        const member = message.guild.members.cache.get(user.id);
        if (!member) 
            return message.reply('The mentioned user is not part of this server.');

        const profilePicEmbed = new EmbedBuilder()
            .setTitle(`${user.username}'s Profile Picture`)
            .setColor('#ffdab9')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 })) // Dynamic image with 512px size
            .setFooter({ text: 'Requested by ' + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) });

        message.reply({ embeds: [profilePicEmbed] });
    },
};
