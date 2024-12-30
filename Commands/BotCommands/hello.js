const { Channel } = require("discord.js")

module.exports = {
    name: 'hello',
    description: "this is a hello channel!",
    execute(message, args, Discord){
        message.channel.send(`👋 Hello there <@${message.author.id}> !!! Nice to meet you. Type 👉 \`g help\` to see more commands.`);
    }
}