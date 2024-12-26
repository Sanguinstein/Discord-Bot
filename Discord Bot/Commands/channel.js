const { Channel } = require("discord.js")

module.exports = {
    name: 'channel',
    description: "for channel!",
    execute(message, args, Discord) {
        if (message.member.permissions.has("MANAGE_CHANNELS")) {
            let channelName = args.slice(0).join(' '); //Arguments to set the channel name
            message.guild.channels.create(channelName, {
                type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], //Allow permissions
                        //deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
                    }
                ],
            })
            message.reply(`The channel ${channelName} has been created.`)
        }else{
            message.reply('U do not have the permission to execute this command');
        }
    }
}