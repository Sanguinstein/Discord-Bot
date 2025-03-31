const ms = require('ms');
const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "unmute",
    description: "Unmutes a member by removing the 'Prisoner' role.",
    execute(message, args, Discord, client) {
        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return message.channel.send("? You don't have permission to execute this command.");
        }

        const user = message.mentions.users.first();
        if (!user) return message.reply("You need to mention a user to unmute.");

        let mainRole = message.guild.roles.cache.find(role => role.name === "Verified" || role.name === "Member");
        let muteRole = message.guild.roles.cache.find(role => role.name === "Prisoner");

        if (!muteRole) return message.channel.send("The 'Prisoner' role does not exist.");

        let memberTarget = message.guild.members.cache.get(user.id);
        if (!memberTarget) return message.reply("Could not find that member in this server.");

        const { EmbedBuilder } = require('discord.js');

        const unmuteEmbed = new EmbedBuilder()
            .setTitle("\uD83D\uDD0A **User Unmuted**") // ?? Unicode Escape
            .setColor('#00ff00')
            .setDescription(`**<@${memberTarget.user.id}> has been unmuted by <@${message.author.id}>**`)
            .addFields(
                { name: "\uD83D\uDC6E Moderator", value: `<@${message.author.id}>`, inline: true } // ?? Unicode Escape
            )
            .setTimestamp();


        // Remove 'Prisoner' (Mute) role and add back the main role
        memberTarget.roles.remove(muteRole.id).catch(error =>
            client.users.cache.get("756245122324234448").send(`Code error: ${error}`)
        );

        if (mainRole) {
            memberTarget.roles.add(mainRole.id).catch(error =>
                client.users.cache.get("756245122324234448").send(`Code error: ${error}`)
            );
        }

        message.channel.send({ embeds: [unmuteEmbed] });

        const logChannel = message.guild.channels.cache.find(
            channel => channel.name === "reports" || channel.name === "logs"
        );
        if (logChannel) logChannel.send({ embeds: [unmuteEmbed] });
    },
};
