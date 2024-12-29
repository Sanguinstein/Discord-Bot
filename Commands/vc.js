const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'vc',
    description: "Creates a voice channel in the same category",
    execute(message, args) {
        // Check for Manage Channels permission
        if (!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            return message.channel.send('You do not have permission to use this command.');
        }

        // Get the name of the voice channel
        const voiceChannelName = args.join(' ');
        if (!voiceChannelName) {
            return message.channel.send('Please specify a name for the voice channel.');
        }

        // Find the category of the current channel
        const category = message.channel.parent;
        if (!category) {
            return message.channel.send('This command must be used in a channel within a category.');
        }

        // Create the voice channel in the same category
        message.guild.channels.create({
            name: voiceChannelName,
            type: 2, // 2 indicates a voice channel
            parent: category.id, // Assign to the same category
        })
            .then(channel => message.channel.send(`Voice channel **${channel.name}** created in the category **${category.name}**.`))
            .catch(error => {
                console.error(error);
                message.channel.send(`Failed to create voice channel: ${error.message}`);
            });
    },
};
