require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello');

	setInterval(function(){
		res.write((new Date()).getTime() + '<br/>');
	},100);

	setTimeout(function(){
		res.end();
}, 60000);

}).listen(3000);