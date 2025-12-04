import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";

const Header = () => {
  const slides = [
    {
      bgImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      title: "Discover Magical Toys",
      subtitle: "Spark Imagination & Joy",
      description:
        "Explore our curated collection of toys that inspire creativity and bring endless fun to every playtime.",
      buttonText: "Shop All Toys",
      buttonLink: "/allToys",
      overlay: "from-blue-600/70 to-purple-700/70",
      toyImg:
        "https://static.vecteezy.com/system/resources/previews/057/530/773/non_2x/colorful-toy-train-with-conductor-waving-isolated-on-white-background-free-png.png",
    },
    {
      bgImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
      title: "Educational Adventures",
      subtitle: "Learn Through Play",
      description:
        "Discover toys that combine fun with learning, helping children develop essential skills while having a great time.",
      buttonText: "View Learning Toys",
      buttonLink: "/allToys",
      overlay: "from-amber-600/70 to-orange-700/70",
      toyImg:
        "https://static.vecteezy.com/system/resources/previews/057/435/472/large_2x/magnificent-traditional-financial-charts-on-whiteboard-isolated-high-quality-free-png.png",
    },
    {
      bgImage:
        "https://plus.unsplash.com/premium_photo-1701984402171-53940cb4b8ae",
      title: "Creative Building Blocks",
      subtitle: "Build Amazing Creations",
      description:
        "Unleash creativity with our building sets that challenge minds and create endless possibilities for young builders.",
      buttonText: "View Building Toys",
      buttonLink: "/allToys",
      overlay: "from-green-600/70 to-teal-700/70",
      toyImg:
        "https://static.vecteezy.com/system/resources/previews/060/422/234/non_2x/educational-toy-blocks-in-red-yellow-blue-and-green-arranged-in-a-creative-pattern-on-a-transparent-background-free-png.png",
    },
  ];

  return (
    <div className="h-[70vh] min-h-[500px] max-h-[70vh] w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
        loop={true}
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slider {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
