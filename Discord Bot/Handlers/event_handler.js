const fs = require('fs');

module.exports = (client, Discord) => {
    const loadDir = (dirs) => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            try {
                const event = require(`../events/${dirs}/${file}`);
                const eventName = file.split('.')[0];

                if (event.once) {
                    client.once(eventName, (...args) => event.execute(Discord, client, ...args));
                } else {
                    client.on(eventName, (...args) => event.execute(Discord, client, ...args));
                }
            } catch (error) {
                console.error(`Error loading event file "${file}" in "${dirs}":`, error);
            }
        }
    };

    ['client', 'guild'].forEach(loadDir);
};
