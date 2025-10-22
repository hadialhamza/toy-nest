import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Slider = (slide) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={slide.bgImage}
        alt={slide.title}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
      ></div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {slide.title}
              <span className="block text-yellow-300 mt-2">
                {slide.subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-lg opacity-95">
              {slide.description}
            </p>
            <Link to={slide.buttonLink}>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                {slide.buttonText}
                <FaArrowRight className="ml-2 text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
