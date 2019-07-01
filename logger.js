const EventEmitter = require('events');
// uuid creates certain format of id
const uuid = require('uuid');
//console.log(uuid.v4());
class Logger extends EventEmitter{
    log(msg){
        this.emit('message', { id: uuid.v4(), msg });
        // emit the event named message and pass 2 arguments
    }
}

// module.exports = Logger;
// const Logger = require('./logger');

// Event Emitter
const logger = new Logger();

// when logger emits message, do this
logger.on('message', (data) => console.log(`called listener:`, data));

// logger.log emits the message event
logger.log('hello');
