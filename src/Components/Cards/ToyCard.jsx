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
    <div className="bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full max-h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            {subCategory}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold font-baloo md:text-xl lg:text-2xl text-gray-800 mb-2">
          {toyName}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span className="text-md font-medium px-3 py-1 rounded-md bg-green-200 text-green-800">
            {availableQuantity} Left
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-baloo font-semibold text-gray-900">
            ${price}
          </span>
        </div>
        <Link
          to={`/toy/${toyId}`}
          className="w-full px-4 py-2 lg:py-3 flex items-center justify-center gap-2 my-btn"
        >
          <FaEye className="w-4 h-4" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
