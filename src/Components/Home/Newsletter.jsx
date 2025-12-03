import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-white py-16">
      <div className="w-11/12 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-xl">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-baloo text-white mb-4">
            Join the ToyNest Club!
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and be the first to know about new
            arrivals, special offers, and fun activities for kids.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              required
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
              Subscribe <FaPaperPlane />
            </button>
          </form>
          <p className="text-blue-200 text-sm mt-4">
            No spam, just fun updates. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
