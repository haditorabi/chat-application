const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors())

const { auth } = require("./middleware/auth");
const { Chat } = require("./models/Chat");

app.use('/api/users', require('./routes/users'));
app.use('/api/chat', require('./routes/chat'));

const server = require("http").createServer(app);
const io = require("socket.io")(server);
const config = require("./config/key");

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


io.on("connection", socket => {
  socket.on("Input Chat Message", msg => {
    connect.then(db => {
      try {
          let chat = new Chat({ message: msg.chatMessage, sender:msg.userId, type: msg.type })
          chat.save((err, doc) => {
            if(err) return res.json({ success: false, err })

            Chat.find({ "_id": doc._id })
            .populate("sender")
            .exec((err, doc)=> {
                return io.emit("Output Chat Message", doc);
            })
          })
      } catch (error) {
        console.error(error);
      }
    })
   })
})

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
});