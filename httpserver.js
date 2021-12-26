// build http server in nodeJS ie use http module 

// http status codes 

const http = require('http');
const port = process.env.port || 3000;

// make server , then listen on port to run the server 

// make server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    // telling server to fetch response in html form , not plain text 
    res.setHeader('Content-Type', 'text/html');
    // read function ka use krke html files ko end me serve kr skte ho bruh
    res.end('<h1> this is aadi </h1> <p> Lets rock the world </p>');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
