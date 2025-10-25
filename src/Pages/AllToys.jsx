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
          <h2 className="title font-baloo">All Toys</h2>
          <div className="relative inline-block">
            <p className="subtitle">
              Explore our entire toy universe! Find everything from building
              blocks to creative arts, all sourced from amazing local sellers.
              Quality toys, happy kids!
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
