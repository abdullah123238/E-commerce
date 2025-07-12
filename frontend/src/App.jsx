import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <DarkModeProvider>
          <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Navbar />
            <main className="px-4 py-6 max-w-6xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </DarkModeProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
