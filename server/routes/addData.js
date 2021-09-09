const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.send("Here we add data");
});

// User register route
router.post("/user/register", async (req, res) => {
  try {
    const checkData = await userModel.findOne({
      userEmail: req.body.userEmail,
    });
    if (checkData != null) {
      return res.status(409).send("User already exists");
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.uid = uuidv4();

    const newData = new userModel(req.body);
    const savedData = await newData.save();

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
