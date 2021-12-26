// build http server in nodeJS ie use http module 

// http status codes 
const console = require('console');
const fs = require('fs');
const http = require('http');
const { traceDeprecation } = require('process');
const port = process.env.port || 3000;

// make server , then listen on port to run the server 

// make server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    // telling server to fetch response in html form , not plain text 
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        // using below 2 lines you can serve static files and make a static website 
        const data = fs.readFileSync('home.html');
        res.end(data.toString());

    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end("<h1> About aadi </h1> <p> Hey this is about aadi </p>");
    } else if (req.url == '/aadi') {
        // read function ka use krke html files ko end me serve kr skte ho bruh
        res.statusCode = 200;
        res.end('<h1> this is aadi </h1> <p> Lets rock the world </p>');
    } else {
        res.statusCode = 404;
        // crash kr dega, error message se wapas aa skta tha, ab ni aa payega BUG 
        // res.harry();
        res.end("<h1> The page was not found for this endpoint </h1>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// express named framework which will help in making good websites

// dont waste time in typing or anything else, just keep watching more and more tutes and keep implementing simultaneously in your project
