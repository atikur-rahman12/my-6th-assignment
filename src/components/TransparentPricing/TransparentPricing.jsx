import React, { use } from "react";
import SimplePricingCard from "../SimplePricingCard/SimplePricingCard";

const TransparentPricing = ({ simplePricingPromise }) => {
  const simplePricingData = use(simplePricingPromise);

  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          {simplePricingData.map((simplePricing) => (
            <SimplePricingCard
              key={simplePricing.id}
              simplePricing={simplePricing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;