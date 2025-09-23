const fs = require("fs");
const path = require("path");

const afkFile = path.resolve(__dirname, "../Resources/AFKdetails.json");

module.exports = {
    name: "afk",
    description: "Set yourself as AFK with an optional reason",
    execute(message, args) {
        const reason = args.join(" ") || "No reason provided";

        // Load existing AFK data or create an empty object
        let afkData = {};
        if (fs.existsSync(afkFile)) {
            try {
                const rawData = fs.readFileSync(afkFile, "utf8");
                afkData = rawData ? JSON.parse(rawData) : {};
            } catch (error) {
                console.error("Error reading AFK file:", error);
                return message.reply("\u26A0\uFE0F An error occurred while setting AFK.");
            }
        }

        // Save AFK status
        afkData[message.author.id] = { reason, timestamp: Date.now() };

        // Write to the file
        fs.writeFileSync(afkFile, JSON.stringify(afkData, null, 4));

        message.reply(`?? You are now AFK: **${reason}**`);
    }
};
