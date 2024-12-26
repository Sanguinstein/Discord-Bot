module.exports = (Discord, client, message) =>{
    const prefix = 'g ';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord, client);
        //client.channels.cache.get("875701745035120660").send("hello world");
    } else if (command === 'hello') {
        client.commands.get('hello').execute(message, args);//basic
    } else if (command == 'rolee') {
        client.commands.get('rolecommand').execute(message, args, Discord);//test command
    } else if (command == 'getrole') {
        client.commands.get('addrole').execute(message, args, Discord);//test command
    } else if (command == 'embed') {
        client.commands.get('Embedd').execute(message, args, Discord);//test command
    } else if (command == 'clear') {
        client.commands.get('Clear').execute(message, args, Discord);//mod
    } else if (command == 'kick') {
        client.commands.get('Kick').execute(message, args, Discord, client);//mod
    } else if (command == 'ban') {
        client.commands.get('Ban').execute(message, args, Discord, client);//mod
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args, Discord, client);//mod
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord, client);//mod
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);//basic
    } else if (command == 'truth') {
        client.commands.get('truth').execute(message, args, Discord);//fun
    } else if (command == 'iloveyou') {
        message.channel.send('Awww...I love you tooo 💖💖');//reply
    } else if (command == 'your') {//reply
        if (!args[0]) return message.reply('My what?');
        switch (args[0]) {
            case 'creator':
                message.reply('One idiot named Sanguine'); break;
            case 'version':
                message.reply('⚙️1.0.0.whatever⚙️'); break;
            case 'face':
                var bbd = new Discord.MessageEmbed().setTitle('Bruh').setURL('https://youtu.be/dQw4w9WgXcQ').setImage('https://i1.sndcdn.com/artworks-000094489636-qzznk3-t500x500.jpg')
                    .setFooter('Happy now 😒?');
                message.channel.send(bbd);
        }
    } else if (command == 'dice') {//fun
        var ii;
        ii = Math.floor(Math.random() * 6) + 1;
        switch (ii) {
            case 1:
                message.reply(`you got ${ii}. Better luck next time. `); break;
            case 2:
                message.reply(`you got ${ii}. Better luck next time. `); break;
            case 3:
                message.reply(`you got ${ii}. Better luck next time. `); break;
            case 4:
                message.reply(`you got ${ii}. Better luck next time. `); break;
            case 5:
                message.reply(`you got ${ii}. Better luck next time. `); break;
            case 6:
                message.reply(`YOOOO, you got ${ii}. Hell yeah Luckyyy!! `); break;
        }
    } else if (command == 'hug') {//fun
        client.commands.get('hug').execute(message, args, Discord);
    } else if (command == 'warn') {//mod
        client.commands.get('warn').execute(message, args, Discord, client);
    } else if (command == 'sus') {//fun
        client.commands.get('sus').execute(message, args, Discord);
    } else if (command == 'channel') {//mod
        client.commands.get('channel').execute(message, args, Discord);
    } else if (command == 'suggest') {//mod
        client.commands.get('suggest').execute(message, args, Discord);
    } else if (command == 'pfp') {//fun
        client.commands.get('pfp').execute(message, args, Discord);
    } else if (command == 'vc') {//mod
        client.commands.get('vc').execute(message, args, Discord);
    } else if (command == 'rules') {//test
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'dev') {//fun
        client.commands.get('develop').execute(message, args, Discord);
    } else if (command == 'quote') {//fun
        client.commands.get('quote').execute(message, args, Discord);
    } else if (command == 'duck') {//fun
        client.commands.get('duck').execute(message, args, Discord);
    } else if (command == 'member') {//all
        client.commands.get('member').execute(message, args, Discord, client);
    } else if (command == 'ano') {//all
        client.commands.get('anonymous').execute(message, args, Discord);
    }else if (command == 'temp') {//mod
        client.commands.get('temprole').execute(message, args, Discord);
    }else if (command == 'nav') {//fun
        message.channel.send('https://discord.com/channels/873500667774390312/884146230257676399/884152825473531934');
    }else if (command == 'talk') {//owner
        client.commands.get('talk').execute(message, args, Discord, client);
    } else if (command == 'announce') {//mod
        let announce = args.join(' ');
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('You do no have the permission to use this command');
        message.channel.send(`@everyone,\n${announce} `);
    }else if (command == 'role') {//booster
        client.commands.get('role').execute(message, args, Discord, client);
    }else if (command == 'wyd') {//booster
        client.commands.get('wyd').execute(message, args, Discord, client);
    }
}