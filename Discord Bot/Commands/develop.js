const { Channel } = require("discord.js")
//allows bots to add roles to the member who types this command. Make sure that the bot has the 'manage roles' perm enabled
module.exports = {
    name: 'develop',
    description: "allow bot to add roles to people",
    execute(message, args, Discord){
        if(!args[0]){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'gravityteam');
        message.channel.send(`I will give the gravityteam role to you`);
        message.member.roles.add('877209490812969021');
        message.channel.send('Type `g dev delete` if u dont want the role ');
        //roles.remove removes the role from the person who typed this command
        }
        if(args[0] == 'delete'){
            message.member.roles.remove('877209490812969021');
            message.channel.send('Role has been removed');

        }
    }
}