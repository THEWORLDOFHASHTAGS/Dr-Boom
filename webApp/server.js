//Import required modules
var express = require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nano = require('nano')('http://localhost:5984');

// Add the database connection
var dbase = nano.db.use('countries');

app.use(express.static(path.join(__dirname + '/public')));

// Display the html page when a user opens it
app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
io.on('connection', function(socket){
  socket.on('country', function(msg){     
    console.log(msg);
    io.emit('country', msg);
	delete msg;
  });
=======
// Handle socket connection
io.on('connection', function(socket) {
	socket.on('country', function(txt) {
		//console.log(txt);
		var msg = "";
		// Get the doc with id 'txt', i.e. the country
		dbase.get(txt, function(error, doc) {
			// Get the data from the 'tweets' field within the doc
			msg = doc.tweet;
			//console.log(msg);
			io.emit('country', msg);
		});
	});
>>>>>>> 632d630b505bf2862aec1789bdbc5506950b876e
});

// Add a port for the server to listen to
http.listen(3000, function() {
	console.log('Listening on 3000');
});