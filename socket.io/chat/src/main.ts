import express from 'express';
import http from 'http';
import path from 'path';
import ioServer from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = ioServer(server);
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    io.emit('some event', {
        // This will emit the event to all connected sockets
        someProperty: 'some value',
        otherProperty: 'other value',
    });

    // io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
    // });

    // io.on('connection', (socket) => {
    // socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg);
    // });
    // });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', '/index.html'));
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
