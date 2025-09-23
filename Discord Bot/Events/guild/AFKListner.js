const fs = require('fs');
const path = require('path');
const afkFile = path.join('../Commands/Resources/AFKdetails.json');

class AFKListener {
    constructor(client) {
        this.client = client;
    }

    handle() {
        this.client.on('messageCreate', async (message) => {
            if (message.author.bot) return;

            let afkData = JSON.parse(fs.readFileSync(afkFile, 'utf8'));

            if (afkData[message.author.id]?.justSet) {
                afkData[message.author.id].justSet = false;
                fs.writeFileSync(afkFile, JSON.stringify(afkData, null, 2));
                return;
            }

            if (afkData[message.author.id]) {
                delete afkData[message.author.id];
                fs.writeFileSync(afkFile, JSON.stringify(afkData, null, 2));
                message.reply(`Welcome back <@${message.author.id}>, I removed your AFK status!`);
            }
        });
    }
}

module.exports = AFKListener;
