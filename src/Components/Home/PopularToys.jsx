import React from "react";
import ToyCard from "../Cards/ToyCard";
import useToysData from "../../Hook/useToysData";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const PopularToys = () => {
  const { toys } = useToysData();

  return (
    <div>
      <div className="w-11/12 mx-auto py-10 md:py-15">
        <div className="text-center mb-16 md:mb-20 relative">
          <h2 className="title font-baloo">Popular Toys</h2>
          <div className="relative inline-block">
            <p className="subtitle">
              Discover our most loved and trending toys that bring joy and
              creativity to children of all ages
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
          {toys.slice(0, 8).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
        <div className="text-center mt-10">
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
