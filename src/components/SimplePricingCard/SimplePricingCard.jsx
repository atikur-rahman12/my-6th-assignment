import React from "react";

const SimplePricingCard = ({ simplePricing }) => {
  const { name, price, period, description, features, button, popular } = simplePricing;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm mt-5 h-full mx-auto transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div className="card-body bg-[#F2F2F2] border border-gray-700 rounded-2xl">
          {popular && (
          <span className="badge badge-xs badge-warning">Most Popular</span>
        )}

          <h2 className="text-3xl font-bold text-black">{name}</h2>
          <p className="text-gray-500">{description}</p>
          <span className="text-xl mt-2">
            <span className="text-black text-4xl font-bold">{price}</span>{" "}
            <span className="text-gray-500">/ {period}</span>
          </span>
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
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="btn btn-block bg-linear-to-r from-indigo-600 to-purple-500 border-none rounded-full">{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricingCard;