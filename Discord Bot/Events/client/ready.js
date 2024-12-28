module.exports = {
    name: 'ready',
    once: true, // Indicates this event should be registered with `client.once`
    execute(client) {
        console.log('GATE is online');
    },
};