import React from 'react';

// You can replace these with your own images
const galleryImages = [
  "https://images.pexels.com/photos/1769305/pexels-photo-1769305.jpeg",
  "https://images.pexels.com/photos/4491535/pexels-photo-4491535.jpeg",
  "https://images.pexels.com/photos/3661242/pexels-photo-3661242.jpeg",
  "https://images.pexels.com/photos/8106637/pexels-photo-8106637.jpeg",
  "https://images.pexels.com/photos/3662846/pexels-photo-3662846.jpeg",
  "https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg"
];

const PlaytimeGallery = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-nunito text-center mb-4">
          Our Happy Campers
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See the joy our toys bring to families! Share your moments with us using #ToyNest.
        </p>

        {/* Responsive Image Grid */}
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

export default PlaytimeGallery;