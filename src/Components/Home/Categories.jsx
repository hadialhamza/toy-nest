import React from "react";
import { Link } from "react-router";
import { FaPuzzlePiece, FaCubes, FaRobot, FaHeart } from "react-icons/fa";

// Data for the categories
const categories = [
  {
    name: "Building Blocks",
    icon: <FaCubes className="w-12 h-12" />,
    color: "bg-blue-100 text-blue-600",
    link: "/category/building-blocks",
  },
  {
    name: "Educational Toys",
    icon: <FaRobot className="w-12 h-12" />,
    color: "bg-green-100 text-green-600",
    link: "/category/educational-toys",
  },
  {
    name: "Plush Toys",
    icon: <FaHeart className="w-12 h-12" />,
    color: "bg-pink-100 text-pink-600",
    link: "/category/plush-toys",
  },
  {
    name: "Puzzles",
    icon: <FaPuzzlePiece className="w-12 h-12" />,
    color: "bg-yellow-100 text-yellow-600",
    link: "/category/puzzles",
  },
];

const Categories = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-nunito text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${category.color}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold font-nunito mt-4 text-gray-800">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
