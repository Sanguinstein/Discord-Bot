const AFKListener = require('../Events/guild/AFKListner');
const Ready = require('../events/client/Ready');
const MessageCreate = require('../events/guild/MessageCreate');
class EventHandler {
    constructor(client) {
        this.client = client;
        this.ready = new Ready(client);
        this.messageCreate = new MessageCreate(client);
        this.afkListener = new AFKListener(client);
    }

    initialize() {
        this.ready.handle();
        this.messageCreate.handle();
        this.afkListener.handle();
    }
}

module.exports = EventHandler;
