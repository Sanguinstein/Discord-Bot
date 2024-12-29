const { Channel } = require("discord.js")

module.exports = {
    name: 'Clear',
    description: "for clearing",
    async execute(message, args, Discord) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            if (!args[0]) return message.reply("Please the number of messages u wanna clear");
            if (isNaN(args[0])) return message.reply('Please enter a real number');

            if (args[0] > 100) return message.reply("You cannot delete more than 100 messages");
            if (args[0] < 1) return message.reply('You need to enter a value above zero');

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.reply('You do not have the permission to use this command');
        }
        //ssidenote: you cannot clear messages that are older than 14 days
    }
}