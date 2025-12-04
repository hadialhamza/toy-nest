import React from "react";
import ToyCard from "../Cards/ToyCard";
import useToysData from "../../Hook/useToysData";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const PopularToys = () => {
  const { toys } = useToysData();

  return (
    <div className="mt-10 md:mt-20">
      <div className="my-container">
        <div className="text-center mb-10 md:mb-15 relative bg-white p-8 md:p-12 rounded-2xl shadow-md">
          <h2 className="title font-baloo text-gradient">Popular Toys</h2>
          <div className="relative inline-block">
            <p className="subtitle">
              Discover our most loved and trending toys that bring joy and
              creativity to children of all ages
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {toys.slice(0, 8).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
        <div className="text-center mt-10 lg:mt-15">
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
