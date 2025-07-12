// server/server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./cofig/db"); // ✅ fixed typo
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const Product = require("./models/product");


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS setup to allow frontend (Vite on port 5173)
app.use(
  cors({
    origin: "http://localhost:5173", // adjust if hosting elsewhere
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Optional test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working ✅" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Seed logic (run only if SEED_DB=true)
if (process.env.SEED_DB === "true") {
  const seedProducts = async () => {
    try {
      const sampleProducts = [
        {
          name: "Wireless Bluetooth Headphones",
          description: "High quality over-ear headphones with noise cancellation.",
          price: 18000,
          
        },
        {
          name: "Smart Fitness Watch",
          description: "Track your fitness and heart rate with style.",
          price: 22000,
          
        },
        {
          name: "Portable Charger 20000mAh",
          description: "Charge multiple devices on the go.",
          price: 9500,
         
        },
        {
          name: "Gaming Mouse RGB",
          description: "Customizable DPI and RGB lighting effects.",
          price: 7500,
          
        },
        {
          name: "Wireless Keyboard",
          description: "Slim and ergonomic wireless keyboard.",
          price: 11500,
          
        },
        {
          name: "USB-C Hub 7-in-1",
          description: "Expand your laptop's connectivity with 7 extra ports.",
          price: 13500,
          
        },
        {
          name: "LED Desk Lamp",
          description: "Adjustable brightness and color temperature.",
          price: 8000,
         
        },
        {
          name: "Laptop Stand",
          description: "Aluminum stand for improved airflow and posture.",
          price: 10500,
          
        },
        {
          name: "1080p HD Webcam",
          description: "Perfect for remote work and video calls.",
          price: 12000,
          
        },
        {
          name: "Bluetooth Speaker",
          description: "Loud, compact and portable speaker with bass boost.",
          price: 16000,
          
        }
      ];

      await Product.deleteMany();
      await Product.insertMany(sampleProducts);
      console.log("✅ Sample products seeded.");
    } catch (error) {
      console.error("❌ Failed to seed products:", error.message);
    }
  };

  seedProducts();
}

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
