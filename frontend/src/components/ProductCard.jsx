import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image || "/default-product.jpg"}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 font-bold dark:text-green-400">
            ₦{product.price.toLocaleString()}
          </span>

          <button
            className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition"
            disabled
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
