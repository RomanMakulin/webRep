const http = require('http');

let countMain = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        countMain++;
        res.end(`<h1>Main page</h1>\n
        <p>clicked: [${countMain}]</p>\n
        <a href="/about">about link</a>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        countAbout++;
        res.end(`<h1>About page</h1>\n
        <p>clicked: [${countAbout}]</p>\n
        <a href="/">main link</a>`);
    } else {
        res.writeHead(400, {
            'Content-Type': "text/html; charset=UTF-8"
        });
        res.end('<h1>Not found page (404)</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log('Sever was starting');
});