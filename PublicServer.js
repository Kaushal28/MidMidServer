var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const fs = require('fs');

const port = 3000;

io.on('connection', (socket) => {
    console.log('A client Connected!');
    socket.on('disconnect', ()=> {
        console.log('Client disconnected from server');
    });
    socket.on('addlog', msg => {
        socket.broadcast.emit('taillog', msg);
    });
});

http.listen(port, () => {
    console.log('Server listening on port: ' + port);
});