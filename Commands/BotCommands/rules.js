const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'rules',
    description: "Post the server rules",
    execute(message) {
        const rulesEmbed = new EmbedBuilder()
            .setThumbnail('https://www.pngitem.com/pimgs/b/65-657154_pressure-png.png')
            .setColor(0xff0000) // Use hex as number in v14
            .setDescription(`1. Please be respectful to your fellow server members in both text and voice chat.

2. Slurs, personal attacks, and sharing someone else's private information are not condoned under any circumstances. Engaging in these acts will result in serious consequences, sometimes even an immediate ban.

3. Users making a habit of being overly rude, argumentative, or generally bothersome to others in either the text channels or voice chats are also subject to punishment via a mute or even a ban, depending on how many warnings they have accumulated prior to the infraction. This is a kind and welcoming community. Let's keep it that way.

4. Posting harmful links or gifs that intentionally crash people's Discord, give viruses, etc., will be met with a 24-hour mute or possibly a ban.

5. Do not mention users excessively. Don't do it at all if they ask you not to.

6. No excessive minimodding. Trivial things such as redirecting users to the appropriate channels is fine, but otherwise, leave it to the mods. If none are around, feel free to notify a mod via DM.

7. No discussion of politics, religion, self-harm, or other overly controversial subjects in the #general channel.

8. Unsolicited DMs that include insults, inappropriate comments, random self-advertisement, NSFW material (nudes, NSFW links, pornography, gore, etc.), scams or content meant to inflict discomfort may result in moderator intervention such as a warning and/or mute or ban.
If you are being targeted with any of the above behavior, type \`g warn @user reason\` or please notify a moderator via DMs immediately and keep it out of the server itself so as to avoid further conflict.

9. Personal spats between friends that started as friendly correspondence before turning hostile is not considered unsolicited and should be handled amongst yourselves. The server staff will not interfere.

---

?? Follow the [Discord Community Guidelines](https://discordapp.com/guidelines)  
?? Follow the [Discord Terms of Service](https://discord.com/terms)`);

        // delete the user's command message
        if (message.deletable) {
            message.delete().catch(() => { });
        }

        // send rules embed
        message.channel.send({ embeds: [rulesEmbed] });
    }
};
