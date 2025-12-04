import React, { useState, useMemo } from "react";
import useToysData from "../Hook/useToysData";
import LoadingPage from "./LoadingPage";
import ToyCard from "../Components/Cards/ToyCard";

const AllToys = () => {
  const { toys, loading } = useToysData();
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(toys.map((toy) => toy.subCategory))];

  const processedToys = useMemo(() => {
    let filtered = [...toys];

    if (selectedCategory) {
      filtered = filtered.filter((toy) => toy.subCategory === selectedCategory);
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [toys, selectedCategory, sortOrder]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-base-200 min-h-screen">
      <title>Toy Nest | All Products</title>
      <div className="my-container py-8 md:pb-15 lg:pb-20">
        <div className="text-center mb-8 relative bg-white pb-10 pt-7 rounded-2xl shadow-md">
          <h2 className="title text-gradient font-baloo">All Toys</h2>
          <div className="relative">
            <p className="subtitle">Explore our entire toy universe!</p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-md">
          <div className="flex items-center gap-4 md:flex-1">
            <h2 className="font-bold text-gray-700">Filter By Category:</h2>
            <select
              className="select select-bordered bg-gray-50"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center md:justify-end gap-4 md:flex-1">
            <span className="font-bold text-gray-700">Sort By Price:</span>
            <select
              className="select select-bordered w-full max-w-xs bg-gray-50"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="">Default</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {processedToys.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-7">
            {processedToys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-500">
              No toys found matching criteria.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
