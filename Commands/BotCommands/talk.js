module.exports = {
    name: 'talk',
    execute(message, args) {
        if (message.author.id !== '756245122324234448') {
            return message.reply('Only bot maker can do that');
        }

        let speak = args.join(' ');
        if (!speak) return message.reply("You didn't provide anything for me to say!");

        message.channel.send(speak)
            .then(() => message.delete())
            .catch(error => message.reply(`Error: ${error.message}`));
    }
};
