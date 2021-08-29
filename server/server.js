const express = require("express");
const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  try {
    res.send("Hello world");
  } catch (e) {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
