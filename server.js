const express = require("express");
const {addUser, removeUser, getUser, getUserInRoom} = require('./src/utils/users')
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/users"));
app.use(require("./config/auth"));
// app.use("/api/favoriteList", require("./routes/api/favoriteList"));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

const server = app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callBack) => {
       const {error, user} = addUser({ id: socket.id, name, room})

       if(error) return callBack(error)

       socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
       socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`})
       
       socket.join(user.room)

       io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)})

       callBack()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', { user: user.name, text: message})
        callback()

        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)})
    })

    socket.on('disconnect', () => {
      const user = removeUser(socket.id)
      if(user){
          io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`})
      }
    })
})
