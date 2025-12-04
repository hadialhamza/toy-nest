import React from "react";

const galleryImages = [
  "http://4ty.me/auaghf",
  "http://4ty.me/9hkkuj",
  "http://4ty.me/3y8pw8",
  "http://4ty.me/d3cv9n",
  "http://4ty.me/cwi5fv",
  "http://4ty.me/f3iczo",
];

const ImageGallery = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="my-container">
        <div className="text-center mb-10 md:mb-15 relative bg-white p-8 md:p-12 rounded-2xl shadow-md">
          <h2 className="title font-baloo text-gradient text-center">
            Our Happy Campers
          </h2>
          <div className="relative">
            <p className="subtitle text-center mb-12">
              See the joy our toys bring to families! Share your moments with us
              using #ToyJoy.
            </p>
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg 
                       transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1} of child playing with toys`}
                className="h-60 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
