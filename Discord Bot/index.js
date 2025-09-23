// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const EventHandler = require('./handlers/EventHandler');
const express = require("express");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Bot is running!");
});

app.listen(3000, () => {
    console.log("? Web server is running on port 3000");
});

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
