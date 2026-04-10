import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = ({ cartItems }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2 sm:gap-4">
        <span className="btn btn-ghost rounded-full relative sm:mr-2">

          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
              {cartItems.length}
            </span>
          )}
        </span>
        <span className="btn btn-ghost rounded-full font-normal">Login</span>
        <a className="btn bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-medium">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;