const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const configurator = require('./logic/configurator');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', () => {
    console.log('new connection');
});

http.listen(3333, () => {
    console.log('listening on *:3333');
    configurator(io);
});
