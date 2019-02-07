const express = require("express")
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.set('origins', '*:*');

io.on('connection', socket => {
  console.log("web socket connected");
  socket.emit('news', { hello: 'world' });
  socket.on('channel1', data => {
    console.log(data);
  });
  socket.on('channel2', data => console.log(data));
})


server.listen(5000, () => {
	console.log("Server running 5000");
})