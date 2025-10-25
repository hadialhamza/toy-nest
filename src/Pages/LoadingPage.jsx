import React from "react";
import { FaSpinner, FaMagic, FaGift } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-200 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="flex items-center gap-3 mb-6">
        <FaMagic className="text-4xl text-purple-600 animate-bounce" />
        <h1 className="text-5xl font-baloo font-bold text-gray-700">
          <span className="text-indigo-500">Toy</span>
          <span className="text-red-500">Nest</span>
        </h1>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>

      <div className="relative flex items-center justify-center mb-5">
        <div className="w-20 h-20 border-8 border-dashed border-purple-300 rounded-full animate-spin"></div>
        <FaSpinner className="absolute text-3xl text-purple-600 animate-spin-slow" />
        <FaGift className="absolute text-2xl text-pink-400 animate-ping" />
      </div>

      <p className="text-lg font-semibold text-gray-700 mb-2 animate-pulse">
        Preparing your fun world...
      </p>
    </div>
  );
};

export default LoadingPage;
