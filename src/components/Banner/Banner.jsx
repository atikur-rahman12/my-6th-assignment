import React from "react";
import bannerImg from "../../assets/banner.png";
import { CircleDot, Play } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="bg-[#E1E7FF] p-1 px-3 rounded-full w-73 mb-4">
              <span className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent font-medium text-md">
                <CircleDot className="text-indigo-600" />
                New: AI-Powered Tools Available
              </span>
            </p>
            <h1 className="text-6xl font-extrabold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-[#627382] text-lg">
              Access premium AI tools, design assets, templates, <br /> and
              productivity software—all in one place. <br /> Start creating
              faster today. Explore Products
            </p>
            <button className="btn bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-medium mr-2">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full font-medium">
              <Play className="mr-1.5 text-indigo-600" />
              <span className="bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Watch Demo</span>//
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
