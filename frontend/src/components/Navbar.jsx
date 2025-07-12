import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle, Sun, Moon, Menu, X } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          E-Shop
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-100">
          <Link to="/products" className="hover:text-green-600 dark:hover:text-green-400 transition">
            Products
          </Link>
          <Link to="/dashboard" className="hover:text-green-600 dark:hover:text-green-400 transition">
            Dashboard
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          {/* Cart */}
          <Link to="/cart">
            <ShoppingCart className="text-gray-800 dark:text-gray-200" />
          </Link>

          {/* Profile/Login */}
          <Link to="/login">
            <UserCircle className="text-gray-800 dark:text-gray-200" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
              <X className="text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 text-gray-800 dark:text-gray-100 space-y-3">
          <Link
            to="/products"
            onClick={toggleMenu}
            className="block hover:text-green-600 dark:hover:text-green-400"
          >
            Products
          </Link>
          <Link
            to="/dashboard"
            onClick={toggleMenu}
            className="block hover:text-green-600 dark:hover:text-green-400"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
