const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  funds: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
