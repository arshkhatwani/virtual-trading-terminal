const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const { dbUrl } = require("./config");
const cors = require("cors");

mongoose.connect(dbUrl, () => {
  console.log("Connected to DB");
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

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
