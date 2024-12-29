const Ready = require('../events/client/Ready');
const MessageCreate = require('../events/guild/MessageCreate');
class EventHandler {
    constructor(client) {
        this.client = client;
        this.ready = new Ready(client);
        this.messageCreate = new MessageCreate(client);
    }

    initialize() {
        this.ready.handle();
        this.messageCreate.handle();
    }
}

module.exports = EventHandler;
