import React from "react";
import { Link } from "react-router";
import {
  FaPuzzlePiece,
  FaCubes,
  FaGraduationCap,
  FaHeart,
  FaFlask,
  FaPaintBrush,
  FaCar,
  FaHome,
} from "react-icons/fa";

const categories = [
  {
    name: "Building Blocks",
    icon: <FaCubes size={48} className="text-white" />,
    color: "bg-green-500",
  },
  {
    name: "Educational Toys",
    icon: <FaGraduationCap size={48} className="text-white" />,
    color: "bg-blue-500",
  },
  {
    name: "Stuffed Animals",
    icon: <FaHeart size={48} className="text-white" />,
    color: "bg-pink-500",
  },
  {
    name: "STEM Toys",
    icon: <FaFlask size={48} className="text-white" />,
    color: "bg-purple-500",
  },
  {
    name: "Arts & Crafts",
    icon: <FaPaintBrush size={48} className="text-white" />,
    color: "bg-yellow-500",
  },
  {
    name: "Remote Control",
    icon: <FaCar size={48} className="text-white" />,
    color: "bg-red-500",
  },
  {
    name: "Dollhouses",
    icon: <FaHome size={48} className="text-white" />,
    color: "bg-rose-500",
  },
  {
    name: "Puzzles",
    icon: <FaPuzzlePiece size={48} className="text-white" />,
    color: "bg-cyan-500",
  },
];

const Categories = () => {
  return (
    <div className="bg-base-200 mt-10 md:mt-20">
      <div className="my-container">
        <div className="text-center mb-10 md:mb-15 relative bg-white p-8 md:p-12 rounded-2xl shadow-md">
          <h2 className="title font-baloo text-gradient font-bold">
            Shop by Category
          </h2>
          <div className="relative">
            <p className="text-lg text-gray-600 mt-2">
              Find the perfect toy for every interest
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-all duration-300`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold font-nunito mt-4 text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
