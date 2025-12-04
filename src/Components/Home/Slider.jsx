import React from "react";
import { FaArrowRight, FaRegistered } from "react-icons/fa";
import { Link } from "react-router";

const Slider = (slide) => {
  return (
    <div className="w-full h-full relative group">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.bgImage}
          alt=""
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.overlay} opacity-90`}
      />

      <div className="relative h-full flex items-center">
        <div className="w-full my-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-10 rounded-3xl shadow-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 md:text-sm font-bold mb-2 text-xs md:mb-6"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <FaRegistered /> Featured Collection
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-baloo leading-tight"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {slide.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 mt-2 filter drop-shadow-lg">
                  {slide.subtitle}
                </span>
              </h1>

              <p
                className="text-lg text-gray-100 mb-8 leading-relaxed opacity-90"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {slide.description}
              </p>

              <div data-aos="zoom-in" data-aos-delay="400">
                <Link to={slide.buttonLink}>
                  <button className="relative overflow-hidden bg-white text-blue-600 text-sm md:text-base font-bold py-2 md:py-3 px-5 md:px-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] group/btn">
                    <span className="relative z-10 flex items-center gap-2">
                      {slide.buttonText}
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center relative z-10">
              {/* Glow Effect behind image */}
              <div className="absolute w-96 h-96 bg-white/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Floating Image */}
              <img
                src={slide.toyImg}
                alt="Featured Toy"
                className="w-full max-w-lg object-contain drop-shadow-2xl animate-float-gentle transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
