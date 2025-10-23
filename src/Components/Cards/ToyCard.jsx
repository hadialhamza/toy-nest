import React from "react";
import { Link } from "react-router";
import { FaStar, FaEye } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  const {
    toyId,
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    subCategory,
  } = toy;

  // Generate star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300 fill-current"
        }
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-60 object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            {subCategory}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Toy Name */}
        <h3 className="font-bold text-2xl text-gray-800 mb-2 line-clamp-2">
          {toyName}
        </h3>

        {/* Rating and Stock */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span
            className={`text-md font-medium px-3 py-1 rounded-md ${
              availableQuantity > 10
                ? "bg-green-200 text-green-800"
                : availableQuantity > 0
                ? "bg-orange-100 text-orange-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {availableQuantity > 0
              ? `${availableQuantity} left`
              : "Out of stock"}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-gray-900">${price}</span>
        </div>

        {/* View More Button */}
        <Link
          to={`/toy/${toyId}`}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <FaEye className="w-4 h-4" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
