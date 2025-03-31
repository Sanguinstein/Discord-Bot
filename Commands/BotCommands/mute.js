const ms = require('ms');
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "Mutes a user temporarily or permanently",
    execute(message, args, client) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            return message.reply("You don't have permission to use this command.");
        }

        const user = message.mentions.users.first();
        if (!user) return message.reply("You need to mention a user to mute.");

        const memberTarget = message.guild.members.cache.get(user.id);
        if (!memberTarget) return message.reply("Member is not in this server.");

        let muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted'|| role.name == 'Prisoner');
        if (!muteRole) {
            message.guild.roles.create({
                name: 'prisoner',
                color: '#737373',
                permissions: []
            }).then(role => {
                message.guild.channels.cache.forEach(channel => {
                    channel.permissionOverwrites.edit(role, {
                        SendMessages: false,
                        Speak: false,
                        AddReactions: false
                    });
                });
                muteRole = role;
            }).catch(console.error);
        }

        const muteDuration = args[1] ? ms(args[1]) : null;
        if (muteDuration === null && args[1]) {
            return message.reply("Invalid mute duration. Use something like `10m`, `1h`, `1d`.");
        }

        const muteEmbed = new EmbedBuilder()
            .setTitle("\uD83D\uDD0A **User Muted**")
            .setColor('#ff0000')
            .setDescription(`**${memberTarget.user} has been muted by ${message.author}**`)
            .addFields(
                {
                   name: "\u23F3 Mute Length", value: muteDuration ? `\`${ms(muteDuration, { long: true })}\`` : "`Forever`", inline: true },
                { name: "\uD83D\uDC6E Moderator", value: `${message.author}`, inline: true }
            )
            .setTimestamp();

        // Apply mute
        memberTarget.roles.add(muteRole).catch(err => console.error(`Error adding mute role: ${err}`));

        // Send embed message to channel & log channel
        message.channel.send({ embeds: [muteEmbed] });

        const reportChannel = message.guild.channels.cache.find(channel => channel.name.toLowerCase() === 'logs');
        if (reportChannel) reportChannel.send({ embeds: [muteEmbed] });

        // If temporary mute, schedule unmute
        if (muteDuration) {
            setTimeout(() => {
                memberTarget.roles.remove(muteRole).catch(err => console.error(`Error removing mute role: ${err}`));

                const unmuteEmbed = new EmbedBuilder()
                    .setTitle("\uD83D\uDD0A **User Unmuted**")
                    .setColor('#ff0000')
                    .setDescription(`**${memberTarget.user} has been unmuted**`)
                    .addFields(
                        { name: "\u23F3 Mute Length", value: muteDuration ? `\`${ms(muteDuration, { long: true })}\`` : "`Forever`", inline: true },
                        { name: "\uD83D\uDC6E Moderator", value: `${message.author}`, inline: true }
                    )
                    .setTimestamp();

                message.channel.send({ embeds: [unmuteEmbed] });
                if (reportChannel) reportChannel.send({ embeds: [unmuteEmbed] });
            }, muteDuration);
        }
    }
};
