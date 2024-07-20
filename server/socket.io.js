const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();

// Create the server and setup Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://lms.advisionslab.com/",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('workspace-change', (data) => {
    console.log('Received workspace-change:', data);
    socket.broadcast.emit('workspace-change', data);
  });

  
  socket.on('text-change', (data) => {
    console.log('Received text-change:', data);
    socket.broadcast.emit('text-change', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => console.log('Server is running on port 4000'));