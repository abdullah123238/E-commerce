import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { getAllProducts } from "../services/productService";
import LoadingSpinner from "../components/LoadingSpinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onAddToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default Products;
