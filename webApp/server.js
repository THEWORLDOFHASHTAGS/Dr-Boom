var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('country', function(msg){     
    console.log(msg);
    io.emit('country', msg);
	delete msg;
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});