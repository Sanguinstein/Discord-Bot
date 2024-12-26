const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of event_files) {
            try {
                const event = require(`../events/${dirs}/${file}`);
                const event_name = file.split('.')[0];

                if (event.once) {
                    client.once(event_name, (...args) => event.execute(Discord, client, ...args));
                } else {
                    client.on(event_name, (...args) => event.execute(Discord, client, ...args));
                }
            } catch (error) {
                console.error(`Error loading event file "${file}" in "${dirs}":`, error);
            }
        }
    };

    // Dynamically load all subdirectories in the 'events' folder
    const directories = fs.readdirSync('./events').filter(dir => fs.lstatSync(`./events/${dir}`).isDirectory());
    directories.forEach(load_dir);
};
