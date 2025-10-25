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
    link: "/toys/building-blocks",
    icon: <FaCubes size={48} className="text-white" />,
    color: "bg-green-500",
  },
  {
    name: "Educational Toys",
    link: "/toys/educational-toys",
    icon: <FaGraduationCap size={48} className="text-white" />,
    color: "bg-blue-500",
  },
  {
    name: "Stuffed Animals",
    link: "/toys/stuffed-animals",
    icon: <FaHeart size={48} className="text-white" />,
    color: "bg-pink-500",
  },
  {
    name: "STEM Toys",
    link: "/toys/stem-toys",
    icon: <FaFlask size={48} className="text-white" />,
    color: "bg-purple-500",
  },
  {
    name: "Arts & Crafts",
    link: "/toys/arts-crafts",
    icon: <FaPaintBrush size={48} className="text-white" />,
    color: "bg-yellow-500",
  },
  {
    name: "Remote Control",
    link: "/toys/remote-control",
    icon: <FaCar size={48} className="text-white" />,
    color: "bg-red-500",
  },
  {
    name: "Dollhouses",
    link: "/toys/dollhouses",
    icon: <FaHome size={48} className="text-white" />,
    color: "bg-rose-500",
  },
  {
    name: "Puzzles",
    link: "/toys/puzzles",
    icon: <FaPuzzlePiece size={48} className="text-white" />,
    color: "bg-cyan-500",
  },
];

const Categories = () => {
  return (
    <div className="bg-base-200 mt-5">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="title font-baloo text-4xl font-bold">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Find the perfect toy for every interest
          </p>
        </div>
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
