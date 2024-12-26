const message = require("../events/guild/message")
const { execute } = require("./sus")

module.exports = {
    name:'talk',
    execute(message, args, Discord){
        if(message.author.id !=='756245122324234448') return message.reply('Only bot maker can do that');
        let speak = args.join(' ');
         message.channel.send(speak).then(()=>{
            message.delete();
        }).catch(error => message.reply (error));
    }
}