var connet = require('connect');
let http = require('http');
let time = require('./time');

var app = connet();

app.use((req, res, next) => {
    res.write('Hello , world !');
    next();
});

app.use((req, res, next) => {
    res.end('Hello , world !');
});

http.createServer(app).listen(3000);