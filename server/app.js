const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");
const imageRouter = require("./routes/image");
const conversationRouter = require("./routes/conversation");
const { addUser, removeUser, getUser } = require("./utils/users");
const notificationRouter = require("./routes/notification");
const meetupRouter = require("./routes/meetup");

const { json, urlencoded } = express;

connectDB();
const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});
app.set('socketio', io);
io.on("connection",(socket) => {
   
  socket.on('JoinConversation', async({ userId,conversationId},cb) => {

   const{error,user}=await addUser({id:socket.id,userId,conversationId})

    if(error)return cb(error)

    socket.join(conversationId);

    cb()
  }) 
  socket.on('chatMessage', (message,cb) => {
    const user=getUser(socket.id)
    io.to(socket.id).emit('message', {senderId:user.userId,text:message});
    cb()
  });
  socket.on('isTyping', (userId) => {

    const user=getUser(socket.id)

    io.to(socket.id).emit('display',userId);

  });

  socket.on('disconnect',()=>{
   const user=removeUser(socket.id);
   socket.removeAllListeners('chatMessage');  
   console.log("user leave",user)
  })
});

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/request", requestRouter);
app.use("/profile", profileRouter);
app.use("/image", imageRouter);
app.use("/conversation", conversationRouter);
app.use("/notification", notificationRouter);
app.use("/meetup", meetupRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname), "client", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
