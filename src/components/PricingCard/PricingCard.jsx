import { Check } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing, handleAddToCart, buttonStyle }) => {
  const { name, price, period, description, icon, tag, features } = pricing;
  const tagColors = {
    "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
    Popular: "bg-[#E1E7FF] text-blue-800",
    New: "bg-[#DBFCE7] text-[#0A883E]",
  };
  return (
    <div className="card w-96 bg-base-100 shadow-sm mt-5 border border-gray-700 mx-auto transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <div className="w-15 h-15 mt-6 rounded-full flex items-center justify-center border border-gray-500">
            <img className="w-8 h-8" src={icon} alt={name} />
          </div>
          <span
            className={`badge badge-sm px-4 py-3 rounded-full text-lg ${tagColors[tag]}`}
          >
            {tag}
          </span>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-3">{name}</h2>
          <p className="text-gray-400 mb-4">{description}</p>
          <span className="text-xl">
            $ {price} /<span className="text-gray-400 ml-2">{period}</span>
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => handleAddToCart(pricing)}
            className={`btn btn-block rounded-full font-medium ${buttonStyle === pricing.id ? "bg-green-600" : "bg-linear-to-r from-indigo-600 to-purple-500 text-white"}`}
          >
            {buttonStyle === pricing.id ? (
              <span className="flex items-center gap-2 justify-center">
                <Check /> Added to Cart 
              </span>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
