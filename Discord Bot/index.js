// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const EventHandler = require('./handlers/EventHandler');

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const eventHandler = new EventHandler(client);
eventHandler.initialize();

client.login(process.env.BOT_TOKEN);
