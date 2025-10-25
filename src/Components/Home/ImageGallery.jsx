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
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="title font-baloo text-center">Our Happy Campers</h2>
        <p className="subtitle text-center mb-12">
          See the joy our toys bring to families! Share your moments with us
          using #ToyJoy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
