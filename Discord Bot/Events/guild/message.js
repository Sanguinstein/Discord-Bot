module.exports = {
    name: 'messageCreate',
    execute(message, Discord, client) {
        if (message.author.bot) return;

        const prefixes = ['G', 'g', 'G!', 'g!'];
        const prefix = prefixes.find(p => message.content.startsWith(p));

        if (!prefix) return;

        console.log(`Message received: ${message.content}`);

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);

        if (!command) {
            message.channel.send(`Unknown command: \`${commandName}\``);
            return;
        }

        try {
            command.execute(message, args, Discord, client);
        } catch (error) {
            console.error(`Error executing command "${commandName}":`, error);
            message.channel.send('There was an error executing that command.');
        }
    },
};
