const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for move events
  socket.on('move', (data) => {
    console.log('Received move event:', data);
    // Broadcast the move event to all clients except the sender
    socket.broadcast.emit('move', data);
  });

  // Listen for disconnect events
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});