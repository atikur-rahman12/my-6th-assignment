import React from "react";

const Counter = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-purple-500 w-full py-12 px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 mb-25 ">
      <div className="text-center">
        <h1 className="text-6xl font-bold">50K+</h1>
        <p className="text-xl mt-2 text-gray-300">Active Users</p>
      </div>

      <div className="hidden md:block w-px self-stretch bg-white/60"></div>

      <div className="text-center">
        <h1 className="text-6xl font-bold">200+</h1>
        <p className="text-xl mt-2 text-gray-300">Premium Tools</p>
      </div>

      <div className="hidden md:block w-px self-stretch bg-white/60"></div>

      <div className="text-center">
        <h1 className="text-6xl font-bold">4.9</h1>
        <p className="text-xl mt-2 text-gray-300">Rating</p>
      </div>
    </div>
  );
};

export default Counter;
