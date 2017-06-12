var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);
console.log("is listening");
// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Opens a connection with socket.io
io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.lenght);
    // When the socket has been disconnected
    socket.on('disconnect', function(data) {
    	users.splice(users.indexOf(socket.username), 1);
    	updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });
    // Sends a message
    socket.on('send message', function(data) {
        io.sockets.emit('new message', 
        {   msg: data, 
            user: socket.username 
        });
    });

    //New User
    socket.on('new user', function(data, callback) {
    	callback(true);
    	socket.username = data;
    	users.push(socket.username);
    	updateUsernames();
    });

    function updateUsernames(){
    	io.sockets.emit('get users', users);
    }
});