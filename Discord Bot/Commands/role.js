const { Channel } = require("discord.js")

module.exports = {
    name: 'role',
    description: "Basic embed code!",
    execute(message, args, Discord) {
        const channnel = message.guild.channels.cache.find(channel => channel.name == 'custom-roles' || channel.name == 'booster-roles');
        if (message.channel.id !== channnel.id) return message.reply(`You are not a booster. If you are, Try this command in the ${channnel} channel`);

        if (args[0] == 'create') {

            let rolename = args[1];

            if (!rolename) return message.reply('Type a name');
            if (!args[1]) return message.reply('Type a color');

            message.guild.roles.create({
                data: {
                    name: `${rolename}`,
                    color: `${args[2]}`,
                },
                reason: 'we needed a role for Super Cool People',
            }).then(() => {

                var nnamm = new Discord.MessageEmbed()
                    .setColor(`${args[2]}`)
                    .setDescription(`Role \`${args[1]}\` has been created.`);
                message.channel.send(nnamm);
            }).catch(console.error);

        } else if (args[0] == 'delete') {
            if (!args[1]) return message.reply('Mention a role');

            let rr = message.guild.roles.cache.find(role => role.name === `${args[1]}`);
            if (!rr) return message.reply('Role doesnt exist');

            rr.delete().then(() => {
                message.channel.send(`\`${args[1]}\` role has been deleted`);
            }).catch(error => message.reply('error'));

        } else if (args[0] == 'add') {
            let target = message.guild.members.cache.get(message.author.id);
            let rr1 = message.guild.roles.cache.find(role => role.name === `${args[1]}`);
            if(!rr1) return message.reply("Role doesnt exist");
            target.roles.add(rr1.id).then(()=>{
                message.channel.send(`Role \`${args[1]}\` has been added`);
            }).catch(error => message.reply('Error occured'))
        
        }else{
            message.reply("Specify a command");
        }

    }

}