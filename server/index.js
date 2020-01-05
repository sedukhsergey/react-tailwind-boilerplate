const express = require('express');
const v1  = require('uuid/v1');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  console.log('connect for /',)
  // res.render('index.ejs')
  res.send('Hello world');
})
  const userStore = {};

io.sockets.on('connection', function(socket) {
  const userId = v1();
  userStore[userId] = {};
  if (!userStore[userId].id) {
    userStore[userId].name = 'username'
    userStore[userId].id = userId;
    io.emit('conn', userStore[userId]);
  }
  io.emit('is_online', { name: userStore[userId].name, id: userStore[userId].id })


  socket.on('disconnect', function(username) {
    delete userStore[userId]
    io.emit('is_disconnect', userId);
  })


  socket.on('chat_message', function(message) {
    userStore[userId].message = message;
    io.emit('chat_message', {id: userStore[userId].id, name: userStore[userId].name, message: userStore[userId].message});
  });

});

const server = http.listen(8080, function() {
  console.log('listening on *:8080');
});
