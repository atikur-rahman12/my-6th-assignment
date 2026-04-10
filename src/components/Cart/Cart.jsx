import { ShoppingCart } from "lucide-react";
import React from "react";

const Cart = ({ cartItems, setCartItems }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (product) => {
    console.log("Remove from cart:", product);
    const filteredItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filteredItems);
  };

  return (
    <div className="mt-10 bg-white mx-auto px-4 max-w-5xl border border-gray-300 shadow-2xl shadow-black rounded-lg mb-10">
      <h1 className="text-2xl p-2 text-black font-bold text-start mx-auto w-11/12">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center p-4">
          <ShoppingCart
            className="mx-auto mb-4 w-20 h-20 text-gray-500"
            size={48}
          />
          <p className="text-gray-500 font-medium text-2xl sm:text-3xl md:text-4xl mb-4">
            No Items In Cart
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {cartItems.map((product, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-200 mx-auto w-11/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-300">
                  <img
                    className="w-8 h-8"
                    src={product.icon}
                    alt={product.name}
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black">
                    {product.name}
                  </h2>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(product)}
                className="btn bg-gray-300 border-none shadow-none rounded-full text-pink-600 font-bold text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mx-auto w-11/12 flex items-center justify-between">
            <p className="text-gray-500 font-medium text-md">Total :</p>
            <span className="text-black font-bold text-md">${totalPrice}</span>
          </div>
          <button className="btn btn-primary text-white font-medium text-lg rounded-full mx-auto w-11/12 flex mb-5">
            Proceed to Checkout 
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
