var net = require('net');

var count = 0;
var users = {};

var server = net.createServer(function(conn) {
	console.log('new connection!');

	conn.setEncoding('utf8');

	var nickname;

	conn.write("欢迎，还有" + count + "人在聊天室中！\n");
	conn.write("请输入您的昵称：");

	count++;

	conn.on('data', function(data){
		data = data.replace('\r\n', '');

		if(!nickname){
			if(users[data]){
				conn.write('用户名已经存在!');
				return;
			}else{
				nickname = data;
				users[nickname] = conn;

				for(var i in users){
					users[i].write(nickname + ' 加入聊天室了！\n');
				}
			}
		}else{
			for(var i in users){
				if(i != nickname){
					users[i].write(nickname + ' : ' + data + '\n');
				}
			}
		}
	});


	conn.on('close', function(){
		count--;
		delete users[nickname];
	});
});

server.listen(3000, function(){
	console.log('server listening on : 3000');
});