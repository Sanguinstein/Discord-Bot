const Discord = require('discord.js');
const client = new Discord.Client();

const db = require('quick.db');

const fs = require('fs');
const { type } = require('os');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.login('ODcyODI4NjE3NjgyNDY4OTA0.YQvi_g.gV-djsLh8m6NYVMTqrk_nSDdMxM');