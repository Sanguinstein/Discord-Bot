const { Channel } = require("discord.js")
//allows bots to add roles to the member who types this command. Make sure that the bot has the 'manage roles' perm enabled
module.exports = {
    name: 'addrole',
    description: "allow bot to add roles to people",
    execute(message, args, Discord){
        message.channel.send('I will give the ___ role to you');
        message.member.roles.add('872846074543480862');
        //roles.remove removes the role from the person who typed this command
    }
}