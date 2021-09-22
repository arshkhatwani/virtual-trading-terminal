const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");
const decodeToken = require("../middlewares/verifyDecodeToken");
const stocks = require("../stocks");

router.get("/", async (req, res) => {
  res.send("Here we get data");
});

// User login route
router.post("/user/login", async (req, res) => {
  try {
    var { userEmail, password } = req.body;

    const checkData = await userModel
      .findOne({ userEmail })
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

// User profile details route
router.get("/user/profile", decodeToken, async (req, res) => {
  try {
    const { uid } = req.headers.tokenData;

    const profileData = await userModel
      .findOne({ uid })
      .select({ password: 0 });

    res.status(200).json(profileData);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Search query
router.get("/search/query", async (req, res) => {
  try {
    var { qry } = req.headers;
    qry = qry.toLowerCase();
    // console.log(qry)

    var searchResults = stocks.filter((item) => {
      return item.company_name.toLowerCase().includes(qry) || item.symbol.toLowerCase().includes(qry);
    })

    // console.log(searchResults);

    res.status(200).json(searchResults);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
