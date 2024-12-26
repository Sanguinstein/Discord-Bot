const fs = require('fs');

module.exports = (client) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of command_files) {
        try {
            const command = require(`../commands/${file}`);

            // Validate command structure
            if (command.name && typeof command.execute === 'function') {
                client.commands.set(command.name, command);

                // Register aliases, if any
                if (command.aliases && Array.isArray(command.aliases)) {
                    command.aliases.forEach(alias => {
                        client.commands.set(alias, command);
                    });
                }
            } else {
                console.warn(`Command "${file}" is missing 'name' or 'execute' function.`);
            }
        } catch (error) {
            console.error(`Error loading command file "${file}":`, error);
        }
    }
};