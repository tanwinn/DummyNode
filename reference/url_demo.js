const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=1096&status=active');

// Serialized URL
console.log(`href: ${myUrl.href}`);
console.log(`toString: ${myUrl.toString()}`);

// Host (root domain)
console.log(`host: ${myUrl.host}`);
console.log(`hostname without port: ${myUrl.hostname}`);

 console.log(`pathName: ${myUrl.pathname}`);

 // Serialized query
 console.log(myUrl.search);

 console.log(myUrl.searchParams);

 // Add params
 myUrl.searchParams.append('abc', 123);
 console.log(`Params added...`);
 console.log(myUrl.searchParams);