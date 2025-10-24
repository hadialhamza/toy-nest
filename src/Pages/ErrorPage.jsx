import React from "react";
import { Link } from "react-router";
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";
import { MdToys } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-300">404</div>
            </div>

            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-2xl rotate-12 animate-float shadow-lg">
              <div className="w-4 h-4 bg-white rounded-full absolute top-2 left-2"></div>
              <div className="w-4 h-4 bg-white rounded-full absolute top-2 right-2"></div>
            </div>

            <div
              className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full animate-float shadow-lg"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute top-2 left-2"></div>
            </div>

            <div
              className="absolute -bottom-4 left-4 w-14 h-14 bg-green-500 rounded-2xl rotate-45 animate-float shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute top-3 left-3"></div>
            </div>

            <div
              className="absolute -bottom-4 right-4 w-10 h-10 bg-yellow-500 rounded-full animate-float shadow-lg"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2"></div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Oops! <span className="text-blue-600">Lost</span> in{" "}
            <span className="text-amber-600">Toy</span>
            <span className="text-green-600"> land!</span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
            It seems this toy has wandered off from the nest! Don't worry, we'll
            help you find your way back to the fun.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          <Link
            to="/toys"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <MdToys className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explore Toys
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="mt-6 pt-3 border-t border-gray-300">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-amber-600">Toy</span>
            <span className="text-blue-600">Nest</span>
          </h2>
          <p className="text-gray-500">Where play finds a home</p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-current text-gray-300 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ErrorPage;
