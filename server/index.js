const express = require("express");
const v1 = require("uuid/v1");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  console.log("connect for /");
  // res.render('index.ejs')
  res.send("Hello world");
});
const userStore = {};

io.sockets.on("connection", function(socket) {
  const userId = v1();
  socket.emit("getId", userId);
  userStore[userId] = {};
  userStore[userId].name = null;
  userStore[userId].id = userId;
  socket.on("setName", (userName, userId, cb) => {
    userStore[userId].name = userName;
    cb({ name: userName, id: userId });
    io.emit("is_online", {
      name: userStore[userId].name,
      id: userStore[userId].id
    });
  });
  socket.on("chat_message", function(message) {
    userStore[userId].message = message;
    io.emit("chat_message", {
      id: userStore[userId].id,
      name: userStore[userId].name,
      message: userStore[userId].message
    });
  });
  let tymeoutId;
  socket.on("start typing", userId => {
    socket.broadcast.emit("user typing", userStore[userId].name);
    clearTimeout(tymeoutId);
    tymeoutId = setTimeout(() => {
      socket.broadcast.emit("stop typing", userStore[userId].name);
    }, 3000);
  });

  socket.on("disconnect", function(username) {
    delete userStore[userId];
    io.emit("is_disconnect", userId);
  });
});

const server = http.listen(8080, function() {
  console.log("listening on *:8080");
});
