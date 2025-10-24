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
      bgImage:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Discover Magical Toys",
      subtitle: "Spark Imagination & Joy",
      description:
        "Explore our curated collection of toys that inspire creativity and bring endless fun to every playtime.",
      buttonText: "Shop All Toys",
      buttonLink: "/allToys",
      overlay: "from-blue-600/70 to-purple-700/70",
    },
    {
      bgImage:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1920",
      title: "Educational Adventures",
      subtitle: "Learn Through Play",
      description:
        "Discover toys that combine fun with learning, helping children develop essential skills while having a great time.",
      buttonText: "Explore Learning Toys",
      buttonLink: "/educational-toys",
      overlay: "from-amber-600/70 to-orange-700/70",
    },
    {
      bgImage:
        "https://plus.unsplash.com/premium_photo-1701984402171-53940cb4b8ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1920",
      title: "Creative Building Blocks",
      subtitle: "Build Amazing Creations",
      description:
        "Unleash creativity with our building sets that challenge minds and create endless possibilities for young builders.",
      buttonText: "View Building Toys",
      buttonLink: "/building-toys",
      overlay: "from-green-600/70 to-teal-700/70",
    },
  ];

  return (
    <div className="h-[70vh] min-h-[500px] max-h-[800px] w-full">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
