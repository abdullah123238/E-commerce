import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300">
          Your cart is empty 😔 <br />
          <Link to="/products" className="text-green-600 underline">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow rounded"
              >
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    ₦{item.price.toLocaleString()} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Total: ₦{totalAmount.toLocaleString()}
            </span>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
