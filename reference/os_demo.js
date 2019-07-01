const os = require('os');

// Platform
console.log(`Platform: ${os.platform()}`);

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(`Free memory: ${os.freemem()}`);

// Home dir
console.log(`Home directory: ${os.homedir()}`);