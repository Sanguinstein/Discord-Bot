const { Channel } = require("discord.js")
module.exports = {
    name: 'member',
    description: "allow bot to add roles to people",
    execute(message, args, Discord, client) {
        if (!args[0]) {
            let memberr = message.guild.roles.cache.find(role => role.name === 'Member');
            let general = '782659432387313708';
            message.member.roles.add(memberr).then(() =>{
                message.delete();
            }).catch(error => client.users.cache.get('756245122324234448').send(`Code is malfunctioning. Error Detected is: ${error}`));

        }
    }
}