const { Client, GatewayIntentBits, Collection } = require('discord.js');
const db = require('quick.db');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
});

client.commands = new Collection();
client.events = new Collection();

// Load command and event handlers
['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);
