const { Channel } = require("discord.js")
//commands only members with certain roles can execute . used for kick, ban, mute or suspend
module.exports = {
    name: 'rolecommand',
    description: "commands for particular roles!",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('872846074543480862')){
            message.channel.send('Whom do u wanna kick?');}
        else{
            message.channel.send('You dont have the permission to execute this command');
        }
    }
    //member.permissions.has("BAN_MEMBERS") for member who has 'ban people' perm
}