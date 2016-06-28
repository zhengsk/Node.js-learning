

require('http').createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});

	if('/' === req.url){
		res.end(
			`
				<form method="post" action="/url" enctype="multipart/form-data" >
					<h1>My form</h1>
					<fieldset>
						<label>Personal information</label>
						<p>what is your name?</p>
						<input type="file" name="name">
						<p>
							<button>Submit</button>
						</p>
					</fieldset>
				</form>
			`
		);
	}else if('/url' === req.url && 'POST' == req.method){
		var body = '';
		req.on('data', function(chunk){
			body += chunk;
			console.info(chunk); 
		});

		req.on('end', function(){
			res.end(
				'<p>Content-Type: ' + req.headers['content-type'] + '</p>'
				+ '<p>Data:</p><pre>' + body +'</pre>'
			);
		});
	}else{
		res.end('<h1>404</h1>'); 
	}
}).listen(3000);