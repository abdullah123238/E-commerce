import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { cartItems } = useCart();
  const { isDark } = useDarkMode();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="px-4 md:px-8 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-green-600">ShopSmart</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
          Explore amazing products, add them to your cart, and enjoy seamless shopping.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-green-700 transition"
        >
          Browse All Products
        </Link>
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
