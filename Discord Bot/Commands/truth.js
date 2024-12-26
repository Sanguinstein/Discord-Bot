const { Channel } = require("discord.js")
var i;
module.exports = {
    name: 'truth',
    description: "truth channel",
    execute(message, args, Discord){
        i = Math.floor(Math.random() * 30)+1;
        switch(i){
            case 1:
                message.channel.send('If you could be invisible, what is the first thing you would do?');
                break;
            case 2:
                message.channel.send('What is a secret you kept from your parents?');
                break;
            case 3:
                message.channel.send('Who is your secret crush?');
                break;
            case 4:
                message.channel.send('What is the most embarrassing music you listen to?');
                break;
            case 5:
                message.channel.send('What is one thing you wish you could change about yourself?');
                break;
            case 6:
                message.channel.send('If a genie granted you three wishes, what would you ask for?');
                break;
            case 7:
                message.channel.send('What is your biggest regret?');
                break;
            case 8:
                message.channel.send(`Where is the weirdest place you've ever gone to the bathroom?`);
                break;
            case 9:
                message.channel.send(`What is the most food you've ever eaten in a single sitting?`);
                break;
            case 10:
                message.channel.send('Which player would survive a zombie apocalypse and which would be the first to go?');
                break;
            case 11:
                message.channel.send('Reveal all the details of your first kiss.');
                break;
            case 12:
                message.channel.send('What excuse have you used before to get out plans with a friend?');
                break;
            case 13:
                message.channel.send(`What's the longest you've ever slept?`);
                break;
            case 14:
                message.channel.send(`What's your biggest pet peeve?`);
                break;
            case 15:
                message.channel.send('When was the last time you lied?');
                break;
            case 16:
                message.channel.send(`What five things would you bring to a desert island?`);
                break;
            case 17:
                message.channel.send(`What's the most embarrassing thing you ever did on a date?`);
                break;
            case 18:
                message.channel.send(`What is the craziest pickup line you've ever used?`);
                break;
            case 19:
                message.channel.send(`What animal do you think you most look like?`);
                break;
            case 20:
                message.channel.send('How many selfies do you take a day?');
                break;
            case 21:
                message.channel.send('What is one thing you would stand in line for an hour for?');
                break;
            case 22:
                message.channel.send('When was the last time you cried?');
                break;
            case 23:
                message.channel.send(`What's the longest time you've ever gone without showering?`);
                break;
            case 24:
                message.channel.send(`What was your favorite childhood show?`);
                break;
            case 25:
                message.channel.send('If you could be a fictional character for a day, who would you choose?');
                break;
            case 26:
                message.channel.send(`What is the weirdest trend you've ever participated in?`);
                break;
            case 27:
                message.channel.send(`What person do you text the most?`);
                break;
            case 28:
                message.channel.send(`What's your biggest fear?`);
                break;
            case 29:
                message.channel.send('If you could only listen to one song for the rest of your life, what would you choose?');
                break;
            case 30:
                message.channel.send(`What's one silly thing you can't live without?`);
                break;
        }
    }
}