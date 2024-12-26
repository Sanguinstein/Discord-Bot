const { Channel } = require("discord.js")

module.exports = {
    name: 'duck',
    description: "for duck",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle('Quack Quack')
        .addFields(
            {name: 'Quack', value: "Quack Quack"}
        )
        .setURL('https://64.media.tumblr.com/d58f734d41a88fc15d64e6a58ad76623/219fc1a48786fc1d-85/s250x400/ccac8d639c546faf4fa41a3c3d190013904d75b5.gifv')
        .setImage('https://cdn.discordapp.com/attachments/855497766112198666/877259648254742598/36418988ff348259e7a374c2668a9c4e.jpg')
        .setDescription('Quack Quack')
        .setFooter('Quack');
        
        message.channel.send(newEmbed).then(()=>{
            message.delete();
        })
        //basic code for embed
    }
}