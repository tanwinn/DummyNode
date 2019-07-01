//"main"

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // req: request object
    // res: response object
    console.log(req.url);
    
    // ----- request url ------
    /* 
    this (below) isn't efficient
    - if statement for every single html file
    - css file doesn't load because its case isn't handled 
    */

    /*if (req.url === '/'){
        // second param is callback
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), 
            // callback function
            (err, content) => {
                if (err) throw err;
                //http response
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end(content);
            });
    }

    if (req.url === '/api/users') {
        // JSON object [{}, {}, {}]
        const users = [
            {name: 'Tangerine', age: 23},
            {name: 'Orange', age: 37 }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    */

    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    // get the extension name for the http response
    let contentType = "text/html";
    let extname = path.extname(filePath);
    

    switch(extname){
        case ".json":
            contentType = "application/json";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case "png":
            contentType = "image/png";
            break;
        case "jpg":
            contentType = "image/jpg";
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        // error handling
        if (err) {
            if(err.code == 'ENOENT') {
            // page not found
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'), 
                    (err, content) => 
                        {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.end(content, 'utf-8');
                        }
                    );
            }
            else {
                // some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content);
        }
    });
 });

// the host decide, environmen variable
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
