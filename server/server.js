const express = require("express");
const app = express();
const port = 3001;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const mongoose = require("mongoose");
const { dbUrl } = require("./config");
const cors = require("cors");

mongoose.connect(dbUrl, () => {
  console.log("Connected to DB");
});

const marketToken = require("./marketToken");
const WebSocket = require("ws");
const socket = new WebSocket(`wss://ws.finnhub.io?token=${marketToken}`);
socket.addEventListener("open", function (event) {
  // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
  socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" }));
  socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));
});

io.on("connection", (clientSocket) => {
  console.log("A new user connected");
  clientSocket.emit("hello", "Server says hello");
  socket.addEventListener("message", function (event) {
    ltp = JSON.parse(event.data);
    if (ltp.data) {
      // console.log(ltp.data[0].p + "\n");
      clientSocket.emit("price", ltp.data[0].p);
      // clientSocket.emit("price", 100);
    }
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    res.send("Hello world");
  } catch (e) {
    res.sendStatus(500);
  }
});

// Importing Routes
const addDataRoute = require("./routes/addData");
const getDataRoute = require("./routes/getData");

app.use("/adddata", addDataRoute);
app.use("/getdata", getDataRoute);

server.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
