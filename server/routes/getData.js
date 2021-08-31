const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

router.get("/", async (req, res) => {
  res.send("Here we get data");
});

// User login route
router.post("/user/login", async (req, res) => {
  try {
    var { email, password } = req.body;

    const checkData = await userModel
      .findOne({ userEmail: email })
      .select({ userEmail: 1, password: 1, uid: 1 });

    // Checking if user exists
    if (checkData == null) {
      return res.status(404).send("User not found");
    }

    // Checking if password is correct
    const checkPass = await bcrypt.compare(password, checkData.password);
    if (!checkPass) {
      return res.status(401).send("Incorrect Password");
    }

    const token = jwt.sign(
      { uid: checkData.uid, userEmail: checkData.userEmail },
      secretKey,
      { expiresIn: "24h" }
    );

    res.status(200).send(token);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
