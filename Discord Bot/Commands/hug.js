const { Channel } = require("discord.js")

module.exports = {
    name: 'hug',
    description: "for hugging",
    execute(message, args, Discord){
        const user = message.mentions.users.first();
        var i;
        if(user){
            const member = message.guild.member(user);
            if(member){
                i = Math.floor(Math.random() * 6)+1;
                switch(i){
                    case 1:
                        var bbdd = new Discord.MessageEmbed().setColor('#990033').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://c.tenor.com/Zd3o8HgqWKYAAAAM/milk-and-mocha-hug.gif')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bbdd);
                        break;
                    case 2:
                        var bd1 = new Discord.MessageEmbed().setColor('#3a0166').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://media2.giphy.com/media/cNwi7weKS4Hg3Y9Wgu/giphy.gif?cid=790b76115f9b33f3950db40e55b45a99d3f0ec222b8cb787&rid=giphy.gif&ct=g')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bd1);
                        break;
                    case 3:
                        var bd2 = new Discord.MessageEmbed().setColor('#ffaa00').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://64.media.tumblr.com/cf804b9dcb8c730adf32da8ec22f5ae8/tumblr_p7lptpPrMv1wruyjbo1_500.gif')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bd2);
                        break;
                    case 4:
                        var bd3 = new Discord.MessageEmbed().setColor('#ff0066').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://media2.giphy.com/media/VbawWIGNtKYwOFXF7U/giphy.gif?cid=790b7611eaa98087930c9634be4b33c68430e46f9c115dd7&rid=giphy.gif&ct=g')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bd3);
                        break;
                    case 5:
                        var bd4 = new Discord.MessageEmbed().setColor('#40ff00').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://c.tenor.com/YCmCf4Xh6kEAAAAC/anime-hug.gif')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bd4);
                        break;
                    case 6:
                        var bd5 = new Discord.MessageEmbed().setColor('#40ff00').setTitle(`${message.author.tag} hugs ${user.tag}`).setImage('https://media0.giphy.com/media/llmZp6fCVb4ju/giphy.gif?cid=790b7611775db91d3f4f5d5306e970c0c2be888302d10310&rid=giphy.gif&ct=g')
                        .setFooter('Lovely.....')
                        ;
                        message.channel.send(bd5);
                        break;
                }
                    
            }else{
                message.reply(`Member isnt there in the guild`);
            }                
        }else{
            message.reply('You need to specify a person. Type `g hug @user`');
        }
    }
}