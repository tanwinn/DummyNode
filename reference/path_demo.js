const path = require('path'); // A core module

// Base file name
console.log(`Normal file name: ${__filename}`);
console.log(`Path Basename: ${path.basename(__filename)}`);

// Directory name
console.log(`Path dir name: ${path.basename(__dirname)}`);

const file = __filename;

// File extension
console.log(`Extension name: ${path.extname(file)}`);

// Create path object
console.log(path.parse(file));

// Concatenate paths, convenient for delimiters difference btween Windows & MacOS
console.log(path.join(__dirname, 'test', 'hello.html'));

