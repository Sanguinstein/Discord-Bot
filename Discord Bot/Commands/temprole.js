const ms = require('ms');
const { Channel, MessageEmbed } = require("discord.js")

module.exports = { //[user[0] time[1] role[2]]
    name: 'temprole',
    description: "for muting",
    execute(message, args, Discord) {
        if (!message.guild) return message.reply('not in dms');
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply('U do not have the permission');
        
        const user = message.mentions.users.first();
        if (!user) return message.reply('Mention someone');

        if(!args[1]) return message.reply('Specify the time');
        
        if (!args[2]) return message.reply('Metion a role');

        let RRole = message.guild.roles.cache.find(role => role.name === `${args[2]}`);
        if(!RRole) return message.reply('Role doesnt exist');

        let membertarget = message.guild.members.cache.get(user.id);

        let mutebed2 = new Discord.MessageEmbed()
            .setTitle("**NOTICE**")
            .setColor('#9b32a8')
            .setDescription(`Successfully added ${RRole} role to **<@${membertarget.user.id}>**`)
            .addField(`**Role Duration:**`, `${ms(ms(args[1]))}`)
            .addField(`**Moderator:**`, `${message.author}`);

        const channnel = message.guild.channels.cache.find(channel => channel.name === 'reports' || channel.name === '・reports');
        channnel.send(mutebed2);
        message.channel.send(mutebed2);
        membertarget.roles.add(RRole.id).catch(error => message.reply(error));

        let tmbed = new Discord.MessageEmbed()
        .setDescription(`<@${membertarget.user.id}>'s ${RRole} role has been removed`)
        .setColor('#9b32a8')
        .addField(`**Moderator:**`, `${message.author}`);

        setTimeout(function () {
            membertarget.roles.remove(RRole.id).catch(error)
            channnel.send(tmbed);
        }, ms(args[1]));
    }
}