const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Get help for bot commands",
    execute(message, args) {
        // Main help embed
        const mainHelpEmbed = new EmbedBuilder()
            .setColor('#3a0166')
            .setTitle('Help - All Commands')
            .setDescription('Type the prefix before every command.')
            .addFields(
                { name: 'a.) **MODERATION** (Type `help mod` for more details)', value: '`mute`, `kick`, `ban`, `clear`, `warn`, `channel`, `vc`, `embed`, `temp`' },
                { name: 'b.) **FUN**', value: '`truth`, `dice`, `hug`, `ano`, `wyd`, `sus`, `suggest`, `pfp`, `quote`, `nav`' },
                //{ name: 'c.) **MUSIC** *(not yet ready)*', value: '`play`, `stop`' },
                //{ name: 'd.) **MISCELLANEOUS**', value: '`iloveyou`, `your <version/creator/face>`' },
                //{ name: 'e.) **BOOSTER** (Type `help booster` for more details)', value: '`role <create/add/delete>`' }
            );

        // Moderation help embed
        const moderationHelpEmbed = new EmbedBuilder()
            .setColor('#3a0166')
            .setTitle('Help - Moderation Commands')
            .setDescription('Type the prefix before every command.')
            .addFields(
                {
                    name: 'Commands', value: `\`mute <@user> <time>\` - Mute a user. If time is not provided, mute is permanent.
                \n\`kick <@user> <reason>\`
                \n\`ban <@user> <reason>\`
                \n\`clear <amount>\` - Clear the specified number of messages.
                \n\`warn <@user> <reason>\`
                \n\`channel <name>\` and \`vc <name>\` - Create a text or voice channel respectively.
                \n\`embed <message>\`
                \n\`temp <@user> <time> <role name>\` - Temporarily assign a role to a user for a specified duration.` }
            );

        // Booster help embed
        const boosterHelpEmbed = new EmbedBuilder()
            .setColor('#3a0166')
            .setTitle('Help - Booster Commands')
            .setDescription('Type the prefix before every command.')
            .addFields(
                {
                    name: 'Commands', value: `\`role create <role name> <#color hex code>\` - Create a new role with a specific color.
                \n\`role add <role name>\` - Assign yourself a role you created.
                \n\`role delete <role name>\` - Delete a role you created.` }
            );

        // Handle the help category based on the arguments
        switch (args[0]?.toLowerCase()) {
            case 'mod':
                message.reply({ embeds: [moderationHelpEmbed] });
                break;
            case 'booster':
                message.reply({ embeds: [boosterHelpEmbed] });
                break;
            default:
                message.reply({ embeds: [mainHelpEmbed] });
                break;
        }
    },
};
