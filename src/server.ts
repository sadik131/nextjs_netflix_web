const express = require('express');
const { Server, Socket } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

io.on('connection', (socket: any) => {
  console.log('A user connected: ' + socket.id);

  // Emit a message when a new movie is released
  socket.on('new-movie', (data: { title: string, releaseDate: string }) => {
    io.emit('notification', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});
