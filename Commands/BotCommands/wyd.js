const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'wyd',
    description: "Would You Rather game with random questions",
    execute(message) {
        // Load questions from the JSON file
        const questions = JSON.parse(fs.readFileSync('../Commands/Resources/Questions.json', 'utf8'));

        // Select a random question
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];

        // Create the embed
        const newEmbed = new EmbedBuilder()
            .setColor('#d902c3')
            .setTitle('**WOULD YOU RATHER**')
            .setDescription(`1️⃣ **${question.a}**\n\n**OR**\n\n2️⃣ **${question.b}**`);

        // Send the embed and add reactions
        message.reply({ embeds: [newEmbed] })
            .then((msg) => {
                msg.react('1️⃣');
                msg.react('2️⃣');
            })
            .catch((err) => {
                console.error('Error sending embed or adding reactions:', err);
                message.reply('There was an error executing the command.');
            });
    },
};
