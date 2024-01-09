const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        res.end('<h1>Hello na /</h1>');
    } else if (req.url === '/main') {
        res.writeHead(200, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        res.end('<h1>Hello na main </h1>');
    } else {
        res.writeHead(400, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        res.end('<h1>Not found</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log('Sever was starting');
});