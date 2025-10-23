import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0">
              <div className="w-full h-full border-4 border-amber-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-amber-200 rounded-full"></div>
            </div>
            <div
              className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute -bottom-2 left-4 w-4 h-4 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute -bottom-2 right-4 w-5 h-5 bg-yellow-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-amber-600">Toy</span>
          <span className="text-blue-600">Nest</span>
        </h1>
        <p className="text-gray-600 mb-8">Where play finds a home</p>

        <div className="flex justify-center items-center space-x-2 mb-8">
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <div className="mb-8">
          <p className="text-lg text-gray-700 font-semibold inline-block">
            Loading magical toys
            <span className="typing-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse w-3/4"></div>
        </div>

        <p className="text-sm text-gray-500 animate-pulse">
          Preparing fun experiences for you...
        </p>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-8 h-8 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-6 h-6 bg-green-200 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-10 h-10 bg-yellow-200 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-7 h-7 bg-pink-200 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-5 h-5 bg-purple-200 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>
      <style jsx>{`
        .typing-dots span {
          opacity: 0;
          animation: typing 1.5s infinite;
        }
        .typing-dots span:nth-child(2) {
          animation-delay: 0.5s;
        }
        .typing-dots span:nth-child(3) {
          animation-delay: 1s;
        }
        @keyframes typing {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
