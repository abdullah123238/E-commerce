// server/models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "/default-product.jpg",
  },

  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
