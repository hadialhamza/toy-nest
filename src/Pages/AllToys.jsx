import React from "react";
import useToysData from "../Hook/useToysData";
import LoadingPage from "./LoadingPage";
import ToyCard from "../Components/Cards/ToyCard";

const AllToys = () => {
  const { toys, loading } = useToysData();

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-11/12 mx-auto py-10 md:py-15 lg:py-20">
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              All Toys
            </span>
          </h2>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Discover our most loved and trending toys that bring joy and
              creativity to children of all ages
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-7">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
