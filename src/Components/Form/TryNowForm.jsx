import React from "react";
import { toast } from "react-toastify";

const TryNowForm = ({ toyName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    toast.success(
      `Request sent for ${toyName}!
      Name: ${name}, Email: ${email}`
    );

    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-xl w-full">
        <h2 className="title font-baloo text-center !text-4xl">
          Want to try it out?
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-2xl shadow-xl p-8"
        >
          <div>
            <label className="block text-xl font-medium font-baloo text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-xl font-medium font-baloo text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="w-full my-btn py-3 !text-lg">
            Try Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TryNowForm;
