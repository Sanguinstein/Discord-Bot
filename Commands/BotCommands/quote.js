const { Channel } = require("discord.js")
var i;
module.exports = {
    name: 'quote',
    description: "truth channel",
    execute(message, args, Discord) {
        i = Math.floor(Math.random() * 18) + 1;
        switch (i) {
            case 1:
                message.channel.send(`> We carry within us the wonders we seek around us`);
                break;
            case 2:
                message.channel.send(`> Live as if you were to die tomorrow. Learn as if you were to live forever.`);
                break;
            case 3:
                message.channel.send(`> Criticize me when you're on my level. For now, you can admire.`);
                break;
            case 4:
                message.channel.send(`> Smile after you do it beautifully.`);
                break;
            case 5:
                message.channel.send(`> Never be a prisoner of your past. It was just a lesson, not a life sentence`);
                break;
            case 6:
                message.channel.send(`> Stop thinking so much. You are breaking your heart`);
                break;
            case 7:
                message.channel.send(`> Happiness is not waiting for you to find it. it is born out of your actions`);
                break;
            case 8:
                message.channel.send(`> Whoever you are, be good`);break;
            case 9:
                message.channel.send(`> Every end is the new beginning`);break;
            case 10:
                message.channel.send(`> We all make mistakes, but that's no reason to give up`);break;
            case 11:
                message.channel.send(`> One wise word can brighten someone's day`);break;
            case 12:
                message.channel.send(`> A smile attracts a smile, so I came to you.`);break;
            case 13:
                message.channel.send(`> LET'S GO! Hard or slow, if it happens, it will be straight to the goal, through the obstacles to win`);
                break;
            case 14:
                message.channel.send(`> Live for the day and reach for the sun`);
                break;
            case 15:
                message.channel.send(`> With a smile on his face, a person doubles his abilities. `);
                break;
            case 16:
                message.channel.send(`> It always seems impossible until you achieve it.`);
                break;
            case 17:
                message.channel.send(`> Stumbling can prevent a fall`);
                break;
            case 18:
                message.channel.send(`> If you can't change your fate, change your attitude`);
                break;
            case 19:
                message.channel.send(`> What makes me different makes me me`);
                break;
            case 20:
                message.channel.send(`> You never lose until you stop trying`);
                break;


        }
    }
}