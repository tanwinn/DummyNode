// Event emitter: functions attacthed to it is synchronous
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'));

// Emit event
myEmitter.emit('event');
