class Ready {
    constructor(client) {
        this.client = client;
    }

    handle() {
        this.client.once('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);   
        });
    }
}

module.exports = Ready;
