const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const pathJSON = path.join(__dirname, "countPage.json");

// счетчик просмотров по страницам
const countPage = [{
        page: "/",
        count: 0
    },
    {
        page: "/about.html",
        count: 0
    },
];

// записываем в файл текущий счетчик
fs.writeFileSync(pathJSON, JSON.stringify(countPage, null, 2));

// получаем страницы и пишем туда счетчик
// home page
app.get('/', (req, res) => {
    fs.readFile(pathJSON, "utf-8", (error, data) => {
        let dataPage = JSON.parse(data, "utf-8");
        dataPage[0].count += 1;
        fs.writeFile(pathJSON, JSON.stringify(dataPage, null, 2), (error) => {
            if (error) return console.log(error);
        });
        res.send(`
        <h1> Main page </h1>
        <a href="/about.html">About</a>
        <p>Просмотров ${dataPage[0].count}</p>
        `);
    });
});

// about page
app.get('/about.html', (req, res) => {
    fs.readFile(pathJSON, "utf-8", (error, data) => {
        let dataPage = JSON.parse(data, "utf-8");
        dataPage[1].count += 1;
        fs.writeFile(pathJSON, JSON.stringify(dataPage, null, 2), (error) => {
            if (error) return console.log(error);
        });
        res.send(`
        <h1> About page </h1>
        <a href="/">Main page</a>
        <p>Просмотров ${dataPage[1].count}</p>
        `);
    });
});

app.listen(3000);