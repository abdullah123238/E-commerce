import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome back, {user?.name || "Valued User"} 👋
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          You’re logged in! Explore your dashboard options below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/products"
            className="block bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl shadow transition"
          >
            🛍️ Browse Products
          </Link>

          <Link
            to="/cart"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl shadow transition"
          >
            🛒 View Your Cart
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Want to log out? Use the button in the navbar.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
