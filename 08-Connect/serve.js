var connet = require('connect');
let http = require('http');

var app = connet();

aserver.use(connet.static(__dirname + '/website'));

http.createServer(app).listen(3000);