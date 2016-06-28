var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	if(req.url == '/'){

		loadFile('./titles.json', function(data){
			var titles = JSON.parse(data.toString());

			loadFile('./template.html', function(data){
				var tmpl = data.toString();

				render(res, titles, tmpl);
			});
		});
	}
}).listen(8000, '127.0.0.1');

// 加载文件数据
function loadFile(url, callback){
	fs.readFile(url, function(err, data){
		if(err){
			console.error(err);
			res.end('Server Error / <br/>' + url);
		}else{
			callback(data); 
		}
	});
}

// render
function render(res, data, tmpl){
	var html = tmpl.replace('%', data.join('</li><li>'));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
}