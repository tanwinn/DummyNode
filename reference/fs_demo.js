// File System

const fs = require('fs');
const path = require('path');
const FOLDER = path.join(__dirname,'/test');

// Create Folder
/*
fs.mkdir(FOLDER, {}, err => {
    if (err) throw err;
    console.log(`Folder created..`);
}); 
*/
// default is Async that has callback parameter, there is a Sync version

// Create and Write to file
// Override
const HELLO = path.join(FOLDER, 'hello.txt');

fs.writeFile(HELLO, 
    'Hello world from the Post Apocolypse',
    err => {
        if (err) throw err;
        console.log('File written to...');


        // Append File
        fs.appendFile(HELLO, ' and from Hell', err => {
            if (err) throw err;
            console.log('File appended to...');
        })
    }
);

// Read file
fs.readFile(HELLO, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Content from ${path.basename(HELLO)}: "${data}"`); // the reading output
});
