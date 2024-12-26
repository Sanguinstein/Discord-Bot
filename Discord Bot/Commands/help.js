const { Channel, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "get help!!",
    execute(message, args, Discord) {
        const eembed = new MessageEmbed()
            .setColor('#3a0166')
            .setTitle('All Commands')
            .setDescription('Type `g ` before every command')
            .addFields(
                { name: 'a.) **MODERATION** (Type `g help mod` for more details)', value: '\n`mute`  `kick`  `ban`  `clear`  `warn`\n`channel`  `vc`  `embed` `temp` ' },
                { name: 'b.) **FUN**', value: '\n`truth`  `dice`  `hug` `ano` `wyd`\n`sus`  `suggest`  `pfp`  `quote` `nav`' },
                { name: 'c.) **MUSIC** (not yet ready)', value: '\n`play` `stop`' },
                { name: 'd.) **MISCELLANEOUS**', value: '`iloveyou`\n`your <version/creator/face>`' },
                { name: 'e.) **BOOSTER** (Type `g help booster` for more details)', value: '\n\`role\ <create/add/delete>`'}
            );


        const moded = new MessageEmbed()
            .setColor('#3a0166')
            .setTitle('All Commands')
            .setDescription('Type `g ` before every command')
            .addFields(
                {
                    name: '**MODERATION**', value: `\n\`mute <@user> <time>\` - mute is forever if time is not provided
                        \n\`kick <@user> <reason>\`
                        \n\`ban <@user> <reason>\`
                        \n\`clear <amount>\` - for clearing messages
                        \n\`warn <@user> <reason>\`
                        \n\`channel <name>\` & \`vc <name>\` - for creating text and voice channel respectively.
                        \n\`embed <anything>\`
                        \n \`temp <@user> <time> <role name>\` - for adding any role to a member for a short amount of time `},
            );

            
            const imgbd = new MessageEmbed()
            .setColor('#3a0166')
            .setTitle('All Commands')
            .setDescription('Type `g ` before every command')
            .addFields(
                {
                    name: '**BOOSTER**', value: `\`role create <role name> <#color hex code>\` - create a role
                    \`role add <role name u created>\` - Get the role
                    \`role delete <your role name>\` - Delete the role`
                }      
            );


        if (!args[0]) { message.channel.send(eembed); }
        else if (args[0] === 'mod') {
            message.channel.send(moded);
        }else if (args[0] === 'fun') {
            message.channel.send(funed);
        }else if (args[0] === 'booster') {
            message.channel.send(imgbd);
        }

    }
}