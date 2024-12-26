const { Channel } = require("discord.js")

module.exports = {
    name: 'Ban',
    description: "for banning",
    execute(message, args, Discord, client){
        if(message.member.permissions.has("BAN_MEMBERS")){//check if member has perm
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){//check if member is in the guild
                    let reason = args.slice(1).join(' ');
                    if(!reason) return message.reply('You need to provide a valid reason');//check if reason is provided

                    
                   
                    
                    let mbedd = new Discord.MessageEmbed()
                    .setTitle("**__Notice__**")
                    .setDescription(`**${user} has been banned by <@${message.author.id}>**`)
                    .setColor('#DFCFBE')
                    .addField(`**Reason:**`, `\`${reason}\``)
                    .addField(`**Action:**`, `\`Ban\``)
                    .addField(`**Moderator:**`, `${message.author}`)
                    member.ban({reason: 'Misbehaviour'}).then(() =>{
                        message.reply(mbedd);
                        member.send(`You have been banned by <${message.author.username}> for this reason: ${reason}`);
                    }).catch(error => {
                        client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`);
                        message.reply('Nope, I cannot do that');
                        
                    });

                    const channnel = message.guild.channels.cache.find(channel => channel.name === 'reports' || channel.name === '・reports');
                    channnel.send(mbedd);
                    
                }else{
                    message.reply(`Member isnt there in the guild`);
                }                
            }else{
                message.reply('You need to specify a person');
            }

        }else{
            message.channel.send('You do not have the permission to execute this command');
        }
    }
}