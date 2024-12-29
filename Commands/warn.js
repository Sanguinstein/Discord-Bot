const { Channel, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'warn',
    description: "for warning",
    execute(message, args, Discord, client) {
        let warnPermErr = new MessageEmbed()
            .setTitle("**User Permission Error!**")
            .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        if (!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply("Please mention a valid member of this server");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "(No Reason Provided)";

        member.send(`You have been warned by ${message.author.username} for this reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry, ${message.author}. I couldn't dm because the member's dms are closed`));
        let warnEmbed = new MessageEmbed()
            .setTitle("**__Notice__**")
            .setColor('#45B8AC')
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .setThumbnail('https://i.pinimg.com/originals/5d/16/97/5d1697f5aa5c3adcd8b0ba94d8f8d030.jpg')
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)
            .setFooter('Details have been saved in the reports channel')
        
        let warnEmbed2 = new MessageEmbed()
            .setTitle("**__Notice__**")
            .setColor('#45B8AC')
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)

        message.channel.send(warnEmbed)
        const channnel = message.guild.channels.cache.find(channel => channel.name === 'reports'|| channel.name === '・reports');
        channnel.send(warnEmbed2);
    }
}