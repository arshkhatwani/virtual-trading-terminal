const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const decodeToken = require("../middlewares/verifyDecodeToken");
const userPositions = require("../models/userPositions");

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

// Stock buy route
router.post("/user/stock/buy", decodeToken, async (req, res) => {
  try {
    const { uid } = req.headers.tokenData;

    var funds = await userModel.findOne({ uid }).select({ funds: 1 });
    funds = funds.funds;
    const { price, qty, stock } = req.body;

    funds = funds - price * qty;
    if (funds < 0) return res.status(406).send("Insufficient Funds");

    // Checking if the position already exists
    const checkPos = await userPositions.findOne({
      uid,
      stock: req.body.stock,
    });
    if (checkPos != null) {
      const qty2 = checkPos.qty;
      const price2 = checkPos.price;
      var avgPrice = (price * qty + price2 * qty2) / (qty + qty2);
      avgPrice = avgPrice.toFixed(2);
      const totalQty = qty + qty2;

      // Modifying funds
      const modifyFunds = await userModel.findOneAndUpdate(
        { uid },
        { funds },
        { new: true }
      );

      // Checking position square-off
      if (totalQty == 0) {
        const deletePos = await userPositions.findOneAndDelete({ uid, stock });
        return res.status(200).json({ position: "cleared", newFunds: funds });
      }

      const updatedPos = await userPositions.findOneAndUpdate(
        { uid, stock },
        { price: avgPrice, qty: totalQty },
        { new: true }
      );

      return res
        .status(200)
        .json({ posInfo: updatedPos, newFunds: modifyFunds.funds });
    }

    // If no position exists then creating new
    req.body.uid = uid;

    const newData = new userPositions(req.body);
    const savedData = await newData.save();

    // Modifying funds
    const modifyFunds = await userModel.findOneAndUpdate(
      { uid },
      { funds },
      { new: true }
    );

    return res
      .status(200)
      .json({ posInfo: savedData, newFunds: modifyFunds.funds });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Stock sell route
router.post("/user/stock/sell", decodeToken, async (req, res) => {
  try {
    const { uid } = req.headers.tokenData;

    var funds = await userModel.findOne({ uid }).select({ funds: 1 });
    funds = funds.funds;
    var { price, qty, stock } = req.body;
    funds = funds + price * qty;

    // Checking if position already exists
    const checkPos = await userPositions.findOne({ uid, stock });
    if (checkPos != null) {
      qty *= -1;
      const qty2 = checkPos.qty;
      const price2 = checkPos.price;
      var avgPrice = (qty2 * price2 + qty * price) / (qty + qty2);
      avgPrice = avgPrice.toFixed(2);
      const totalQty = qty + qty2;

      // Modify funds
      const modifyFunds = await userModel.findOneAndUpdate(
        { uid },
        { funds },
        { new: true }
      );

      // Checking position square-off
      if (totalQty == 0) {
        const deletePos = await userPositions.findOneAndDelete({ uid, stock });
        return res.status(200).json({ position: "cleared", newFunds: funds });
      }

      if (totalQty > 0) {
        avgPrice = price2;
      }

      if (qty2 < Math.abs(qty)) {
        avgPrice = price;
      }

      // Update position
      const updatedPos = await userPositions.findOneAndUpdate(
        { uid, stock },
        { price: avgPrice, qty: totalQty },
        { new: true }
      );

      return res
        .status(200)
        .json({ posInfo: updatedPos, newFunds: modifyFunds.funds });
    }

    // If no position exists then creating new
    req.body.uid = uid;
    req.body.qty *= -1;
    const newData = new userPositions(req.body);
    const savedData = await newData.save();

    // Modifying funds
    const modifyFunds = await userModel.findOneAndUpdate(
      { uid },
      { funds },
      { new: true }
    );

    return res
      .status(200)
      .json({ posInfo: savedData, newFunds: modifyFunds.funds });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
