const { Channel } = require("discord.js")

module.exports = {
    name: 'Kick',
    description: "for kicking",
    execute(message, args, Discord, client){
        if(message.member.permissions.has("BAN_MEMBERS")){
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){
                    let reason = args.slice(1).join(' ');
                    if(!reason) reason = "(No Reason Provided)";
                    
                    let mbed = new Discord.MessageEmbed()
                    .setTitle("**__Notice__**")
                    .setColor('#F7CAC9')
                    .setDescription(`**${user} has been kicked by <@${message.author.id}>**`)
                    .addField(`**Reason:**`, `\`${reason}\``)
                    .addField(`**Action:**`, `\`Kick\``)
                    .addField(`**Moderator:**`, `${message.author}`)
                    member.kick({reason: 'Misbehaviour'}).then(() =>{
                        message.channel.send(mbed);
                    }).catch(error => {
                        client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`);
                        message.reply('Nope, I cannot do that');
                        
                    });

                    const channnel = message.guild.channels.cache.find(channel => channel.name === '・reports' || channel.name === 'reports');
                    channnel.send(mbed);
                    
                    
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