const events = require('events');

const myEmitter = new events.EventEmitter;

let listenerCallback = data => console.log(`Celebrate ${data}`);
myEmitter.emit('celebration', 'Holi');
myEmitter.on('celebration', listenerCallback);

