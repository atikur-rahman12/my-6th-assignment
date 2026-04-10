import { Package, Rocket, User } from "lucide-react";
import React from "react";

const Steps = () => {
  return (
    <div>
      <div className="text-center mt-15 space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-[#627382] text-sm md:text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-11/12 mt-10">
        <div className="bg-white border border-gray-300 shadow-2xl shadow-black rounded-lg p-6">
          <div className="text-end mb-10">
            <span className="bg-linear-to-r from-indigo-600 to-purple-500 p-2 text-xl rounded-full">01</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gray-200">
              <User className="w-15 h-20 text-indigo-700" />
            </div>
            <h1 className="text-black text-2xl font-bold my-3">Create Account</h1>
            <p className="text-[#627382] mb-4">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-2xl shadow-black rounded-lg p-6">
          <div className="text-end mb-10">
            <span className="bg-linear-to-r from-indigo-600 to-purple-500 p-2 text-xl rounded-full">02</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gray-200">
              <Package className="w-15 h-20 text-indigo-700" />
            </div>
            <h1 className="text-black text-2xl font-bold my-3">Choose Products</h1>
            <p className="text-[#627382] mb-4">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-2xl shadow-black rounded-lg p-6">
          <div className="text-end mb-10">
            <span className="bg-linear-to-r from-indigo-600 to-purple-500 p-2 text-xl rounded-full">03</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gray-200">
              <Rocket className="w-12 h-26 text-indigo-700" />
            </div>
            <h1 className="text-black text-2xl font-bold my-3">Start Creating</h1>
            <p className="text-[#627382] mb-4">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
