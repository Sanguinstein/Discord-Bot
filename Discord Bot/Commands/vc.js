const { Channel } = require("discord.js")

module.exports = {
    name: 'vc',
    description: "for voice",
    execute(message, args, Discord) {
        if (message.member.permissions.has("MANAGE_CHANNELS")) {
            let channelName = args.slice(0).join(' '); //Arguments to set the channel name
            message.guild.channels.create(channelName, {
                type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                        allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], //Allow permissions
                    }
                ],
            }).catch((error) => {
                throw(error);
            })
            message.reply(`The channel ${args[0]} has been created.`)
        }else{
            message.reply('U do not have the permission to execute this command');
        }
    }
}