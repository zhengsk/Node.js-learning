require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'image/jpg'});
	
	require('fs').createReadStream('portrait.jpg').pipe(res);

}).listen(3000);