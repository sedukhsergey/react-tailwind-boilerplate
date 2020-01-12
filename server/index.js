const express = require("express");
const v1 = require("uuid/v1");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const chat = require('./routes/chat');

app.set('socketio', io);
app.use('/chat', chat);

const server = http.listen(8080, function() {
  console.log("listening on *:8080");
});
