const { readFileSync } = require('fs');
const { EmbedBuilder } = require('discord.js');

const hugGifs = JSON.parse(readFileSync('../Commands/Resources/HugGIF.json')); // Load GIF data from JSON

module.exports = {
    name: 'hug',
    description: "for hugging",
    execute(message, args) {
        const user = message.mentions.users.first(); // Get the mentioned user
        if (user) {
            const member = message.guild.members.cache.get(user.id); // Fetch the guild member
            if (member) {
                const randomIndex = Math.floor(Math.random() * hugGifs.length);
                const { color, gif } = hugGifs[randomIndex];

                const hugEmbed = new EmbedBuilder()
                    .setColor(color)
                    .setTitle(`${message.author.tag} hugs ${user.tag}`)
                    .setImage(gif)
                    .setFooter({ text: 'Lovely.....' });

                // Wrap the embed in an object with an embeds property
                message.channel.send({ embeds: [hugEmbed] });
            } else {
                message.reply(`Member isn't in the guild.`);
            }
        } else {
            message.reply('You need to specify a person. Type `g hug @user`');
        }
    }
};
