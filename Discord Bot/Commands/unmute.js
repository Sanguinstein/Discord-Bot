const { Channel } = require("discord.js")

module.exports = {
    name: 'unmute',
    description: "for unmuting",
    execute(message, args, Discord, client){
        if(message.member.permissions.has("BAN_MEMBERS")){
            const user = message.mentions.users.first();
            if(user){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified' || role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');  
                
                let membertarget = message.guild.members.cache.get(user.id);
                var eeeembed = new Discord.MessageEmbed().setTitle('Notice').setColor('#92A8D1')
                .setDescription(`<@${membertarget.user.id}> has been unmuted`);
                
                membertarget.roles.add(mainRole.id).catch(error =>client.users.cache.get('756245122324234448').send(`Sorry <${message.author}> I couldn't send the direct message because of : ${error}`));
                membertarget.roles.remove(muteRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Sorry <${message.author}> I couldn't send the direct message because of : ${error}`));
                message.channel.send(eeeembed);
                
            }else{
                message.reply(`Can't find that member`);
            }
        }else{
            message.channel.send('You dont have the permission to execute this command');
        }
    }
}