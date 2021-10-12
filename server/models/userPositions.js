const mongoose = require("mongoose");

const posSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("userpositions", posSchema);
