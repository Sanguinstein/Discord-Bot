const { ChannelType, PermissionsBitField } = require("discord.js");

module.exports = {
    name: 'channel',
    description: "Create a new channel",
    execute(message, args) {
        if (message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            let channelName = args.join(' ');
            if (!channelName) {
                return message.reply("Please provide a channel name!");
            }

            message.guild.channels.create({
                name: channelName,
                type: ChannelType.GuildText, // Use ChannelType.GuildVoice for voice channels
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, // Default role
                        allow: [
                            PermissionsBitField.Flags.ViewChannel,
                            PermissionsBitField.Flags.SendMessages,
                            PermissionsBitField.Flags.ReadMessageHistory
                        ],
                    }
                ],
            }).then(channel => {
                message.reply(`The channel **${channel.name}** has been created.`);
            }).catch(err => {
                console.error(err);
                message.reply("I couldn�t create the channel. Check my permissions.");
            });
        } else {
            message.reply("You do not have the `Manage Channels` permission to use this command.");
        }
    }
};
