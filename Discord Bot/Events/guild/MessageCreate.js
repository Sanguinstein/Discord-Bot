const { Events } = require('discord.js');
const fs = require('fs');
const path = require('path');

class MessageCreate {
    constructor(client) {
        this.client = client;
    }

    handle() {
        this.client.on(Events.MessageCreate, async message => {
            if (message.author.bot) return;

            const prefixes = ['G', 'g', 'G!', 'g!'];
            const prefix = prefixes.find(p => message.content.startsWith(p));

            if (!prefix) return;

            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            // Load command dynamically
            const commandPath = path.resolve(`../Discord Bot/Commands/${commandName}.js`);

            if (fs.existsSync(commandPath)) {
                const command = require(commandPath);
                command.execute(message, args);
            } else {
                message.channel.send(`Unknown command: ${commandName}`);
            }
        });
    }
}

module.exports = MessageCreate;
