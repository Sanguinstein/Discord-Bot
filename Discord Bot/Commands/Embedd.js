const { Channel } = require("discord.js")

module.exports = {
    name: 'Embedd',
    description: "Basic embed code!",
    execute(message, args, Discord){
        if(!message.member.permissions.has("MANAGE_SERVER")) return message.channel.send('You do no have the permission to use this command');
        aarg = args.join(' ');
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3a0166')
        //.setTitle('📌 Notice')
        //.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic : true}))
        //.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        //.setImage('https://cdn.discordapp.com/attachments/855497766112198666/877259804094136390/917f361596f94e08a07c57904021400b.jpg')
        .setDescription(aarg);
        
        message.channel.send(newEmbed).then(()=>{
            message.delete();
        }).catch(error => message.reply('error'))
        //basic code for embed
    }
}