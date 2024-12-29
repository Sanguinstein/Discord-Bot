const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'embed',
    description: "Basic embed code!",
    execute(message, args) {
        // Check for required permissions
        if (!message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {
            return message.channel.send('You do not have the permission to use this command.');
        }

        // Join the arguments to form the embed description
        const messageDescription = args.join(' ');
        if (!messageDescription) {
            return message.channel.send('Please provide text for the embed.');
        }

        // Create the embed
        const newEmbed = new EmbedBuilder()
            .setColor('#3a0166')
            .setDescription(messageDescription);

        // Send the embed
        message.channel.send({ embeds: [newEmbed] })
            .then(() => message.delete())
            .catch(error => message.reply(`Error generating embed: ${error.message}`));
    },
};
