// server/controllers/productController.js

const Product = require("../models/product");


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
