import React from "react";
import ToyCard from "../Cards/ToyCard";
import useToysData from "../../Hook/useToysData";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const PopularToys = () => {
  const { toys } = useToysData();

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-16 md:py-20">
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Popular Toys
            </span>
          </h2>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Discover our most loved and trending toys that bring joy and
              creativity to children of all ages
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {toys.slice(0, 6).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/allToys"
            className="btn group px-10 py-7 my-btn border-none"
          >
            <span className="flex items-center gap-2">
              View All Toys
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
