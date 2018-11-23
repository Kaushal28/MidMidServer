var io = require('socket.io-client')('https://midmid.herokuapp.com/');
 
io.on('taillog', msg => {
    console.log(msg);
});

io.on('disconnect', () => {
    console.log('Server disconnected from client');
});