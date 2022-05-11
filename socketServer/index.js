const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { getCipherInfo } = require('crypto');
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


//define users
let users = []

const addUser = (userId, socketId) => {
  !users.some(user=>user.userId === userId) && 
    users.push({userId, socketId});
}

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
  return users.find((user) => user.userId === userId)
}
io.on("connection", (socket) => {
    //connect
    console.log("A user had connected.");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id)
      io.emit("getUsers", users)
    });

    //send and get messages
    socket.on("sendMessage", ({senderId, receiverId, text}) => {
      const user = getUser(receiverId);
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text
      });
    })

    //disconnect
    socket.on("disconnect", () => {
      console.log("A user has disconnected.")
      removeUser(socket.id)
      io.emit("getUsers", users)
    })
  }); 




server.listen(8500, () => {
  console.log("SOCKET.IO Server is running")
})
