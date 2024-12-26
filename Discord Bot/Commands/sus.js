const { Channel } = require("discord.js")

module.exports = {
    name: 'sus',
    description: "for sussing!",
    execute(message, args, Discord){
        const user = message.mentions.users.first();
        if(user){
            const member = message.guild.member(user);
            if(member){
                var susb = new Discord.MessageEmbed()
                .setTitle('uh oh')
                .setDescription(`**<@${message.author.id}> susses <@${member.user.id}>**`)
                .setColor('#ff0066')
                .setImage('https://c.tenor.com/LskIhmPr6NcAAAAd/hank.gif')
                .setFooter('ooooh.....Be careful!!')
                message.channel.send(susb);
            }
        }else{
            message.reply('Whom are u sussing? Type `g sus @user`');
        }
    }
}