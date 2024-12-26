const {MessageEmbed} = require ('discord.js');
module.exports = {
    name:'wyd',
    execute(message, Discord, args){
        i = Math.floor(Math.random() * 30)+1;
        var a = 'a';
        var b = 'b';
        switch(i){
            case 1:
                a = 'go into the past and meet your ancestors?';
                b = 'go into the future and meet your great-great-grandchildren?';
                break;
            case 2:
                a = 'have more time?';
                b = 'more money?';
                break;
            case 3:
                a = 'have a rewind button?'; 
                b = 'a pause button on your life?'
                break;
            case 4:
                a = 'be able to talk with the animals?'
                b = 'speak all foreign languages?'
                break;
            case 5:
                a = 'win the lottery?'
                b = 'live twice as long?'
                break;
            case 6:
                a = 'feel worse if no one showed up to your wedding?'
                b =  'to your funeral?'
                break;
            case 7:
                a = 'be without internet for a week?'
                b =  'without your phone?'
                break;
            case 8:
                a = 'be able to travel everywhere?'
                b = 'be rich but cannot leave ur house?'
                break;
            case 9:
                a = 'lose your vision?'
                b = 'your hearing?'
                break;
            case 10:
                a = 'work more hours per day, but fewer days?'
                b =  'work fewer hours per day, but more days?'
                break;
            case 11:
                a = 'listen to music from the ’80s?'
                b =  'music from today?'
                break;
            case 12:
                a = 'become someone else?'
                b = 'just stay you?'
                break;
            case 13:
                a = 'be Batman?'
                b = 'Spiderman?'
                break;
            case 14:
                a = 'be stuck on a broken ski lift?'
                b =  'in a broken elevator?'
                break;
            case 15:
                a = 'Receive cash For your birthday?'
                b = 'gifts for your birthday?'
                break;
            case 16:
                a = 'go to a movie?'
                b = 'to dinner alone?'
                break;
            case 17:
                a = 'always say everything on your mind?'
                b = 'never speak again?'
                break;
            case 18:
                a = 'make a phone call?'
                b =  'send a text?'
                break;
            case 19:
                a = 'read an awesome book?'
                b =  'watch a good movie?'
                break;
            case 20:
                a = 'be the most popular person at work or school?'
                b =  'be the smartest person at work or school?'
                break;
            case 21:
                a = 'put a stop to war?'
                b =  'end world hunger?'
                break;
            case 22:
                a = 'spend the night in a luxury hotel room?'
                b = 'camping surrounded by beautiful scenery?'
                break;
            case 23:
                a = 'explore space?'
                b = 'explore the ocean?'
                break;
            case 24:
                a = 'go deep-sea diving?'
                b = 'bungee jumping?'
                break;
            case 25:
                a = 'be a kid your whole life?'
                b =  'an adult your whole life?'
                break;
            case 26:
                a = 'go on a cruise with friends?'
                b =  'with your spouse?'
                break;
            case 27:
                a = 'lose your keys?'
                b =  'your cell phone?'
                break;
            case 28:
                a = 'eat a meal of cow tongue?'
                b =  'eat a meal of octopus?'
                break;
            case 29:
                a = 'have x-ray vision?'
                b  =  'magnified hearing?'
                break;
            case 30:
                a = 'work in a group?'
                b = 'work alone?'
                break;
        }
        const newEmbed = new MessageEmbed()
        .setColor('#d902c3')
        .setTitle('**WOULD YOU RATHER**')
        .setDescription(`1️⃣ ${a}\n\n**OR**\n\n2️⃣ ${b}`);
        
        message.channel.send(newEmbed).then((msg) =>{
            msg.react('1️⃣');
            msg.react('2️⃣');
        }).catch((err) =>{
            throw err;
        });
    }    
}