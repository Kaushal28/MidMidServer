const Tail = require('nodejs-tail');
var io = require('socket.io-client')('http://localhost:3000');

const filename = 'agent0.log.0';
const tail = new Tail(filename);
 
tail.on('line', function(line) {
    io.emit('addlog', line);
});

tail.on('close', function() {
  console.log('watching stopped');
})
 
tail.watch();
io.on('disconnect', function() {
    console.log('Server disconnected from client');
});