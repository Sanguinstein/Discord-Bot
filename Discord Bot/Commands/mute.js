const ms = require('ms');
const {Channel, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'mute',
    description: "for muting",
    execute(message, args, Discord, client){
        if(message.member.permissions.has("BAN_MEMBERS")){//current id  belongs to the admin role in dunder server
            const user = message.mentions.users.first();
            if(user){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified' || role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted' || role.name === 'mute');  
                let membertarget = message.guild.members.cache.get(user.id);
                if(!args[1]){
                    //var reason = args.slice(2).join(' ');
                    //if(!reason) reason = "(No Reason Provided)";

                    let mutebed = new Discord.MessageEmbed()
                    .setTitle("**__Notice__**")
                    .setDescription(`**<@${membertarget.user.id}> has been muted by <@${message.author.id}>**`)
                    //.setImage('https://i.pinimg.com/originals/e9/94/c0/e994c06c57365ff9727c2bdc8e3a9a62.jpg')
                    .setColor('#92A8D1')
                    .addField(`**Mute length:**`,`\`forever\``)
                    .addField(`**Action:**`, `\`Mute\``)
                    .addField(`**Moderator:**`, `${message.author}`)
                    membertarget.roles.add(muteRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`))
                    membertarget.roles.remove(mainRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`))
                    message.channel.send(mutebed);
                    const channnel = message.guild.channels.cache.find(channel => channel.name === 'reports'|| channel.name === '・reports');
                    channnel.send(mutebed);
                    return;
                }else{
                    //let reason = args.slice(1).join(' ');
                    //if(!reason) reason = "(No Reason Provided)";

                    
                    let mutebed2 = new Discord.MessageEmbed()
                    .setTitle("**__Warn Report__**")
                    .setColor('#92A8D1')
                    .setDescription(`**<@${membertarget.user.id}> has been muted by <@${message.author.id}>**`)
                    //.setImage('https://i.pinimg.com/originals/e9/94/c0/e994c06c57365ff9727c2bdc8e3a9a62.jpg')
                    .addField(`**Mute length:**`, `${ms(ms(args[1]))}`)
                    .addField(`**Action:**`, `\`Mute\``)
                    .addField(`**Moderator:**`, `${message.author}`)

                    const channnel = message.guild.channels.cache.find(channel => channel.name === 'reports' || channel.name === '・reports');
                    channnel.send(mutebed2);
                    message.channel.send(mutebed2);
                    membertarget.roles.add(muteRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`));
                    membertarget.roles.remove(mainRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`));
                
                    setTimeout(function(){
                    membertarget.roles.remove(muteRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`));
                    membertarget.roles.add(mainRole.id).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`));
                    }, ms(args[1]));}
            }else{
                message.reply(`You need to specify the person.`);
            }
        }else{
            message.channel.send('You dont have the permission to execute this command');
        }
    }
}