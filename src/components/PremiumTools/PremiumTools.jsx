import React, { use, useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const PremiumTools = ({ PricingPromise, cartItems, setCartItems }) => {
  const pricingData = use(PricingPromise);
  const [activeTab, setActiveTab] = useState("Products");

  const [buttonStyle, setButtonStyle] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);

    toast(`${product.name} Added to Cart!`, {
      position: "top-right",
      autoClose: 3000,
    });

    setButtonStyle(product.id);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382] my-4">
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>
        <button
          onClick={() => setActiveTab("Products")}
          className={`btn ${activeTab === "Products" ? "bg-linear-to-r from-indigo-600 to-purple-500" : ""} rounded-full text-md font-bold p-5 mr-2`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("Cart")}
          className={`btn ${activeTab === "Cart" ? "bg-linear-to-r from-indigo-600 to-purple-500" : ""} rounded-full text-md font-bold p-5`}
        >
          Cart ({cartItems.length})
        </button>
      </div>
      <div className="mt-10">
        {activeTab === "Products" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {pricingData.map((pricing) => (
              <PricingCard
                key={pricing.id}
                pricing={pricing}
                handleAddToCart={handleAddToCart}//
                buttonStyle={buttonStyle}
              />
            ))}
          </div>
        ) : (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </div>
  );
};

export default PremiumTools;
