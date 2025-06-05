import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero4 = () => {
  const amenities = [
    { title: "CLUB HOUSE", img: "/new/6.jpg" },
    { title: "STATE-OF-THE ART GYM", img: "/new/7.jpg" },
    { title: "CONTEMPORARY WORKING SPACES", img: "/new/1.jpg" },
    { title: "EV CHARGING STATIONS", img: "/new/2.jpg" },
    { title: "STATE-OF-THE ART GYM", img: "/new/7.jpg" },
    { title: "CONTEMPORARY WORKING SPACES", img: "/new/1.jpg" },
    { title: "EV CHARGING STATIONS", img: "/new/2.jpg" },
  ];

  const carouselRef = useRef(null);

  const scrollBy = (direction) => {
    const scrollContainer = carouselRef.current;
    const scrollAmount = 300;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full relative py-20 px-6  ">
      <h2 className="text-center text-3xl md:text-4xl text-yellow-500 font-light tracking-wide mb-6 uppercase">
        Explore our ICONIC PROPERTIES
      </h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-12">
        Kingfisher is celebrated for creating refined residential towers,
        vibrant master-planned communities, and exclusive coastal retreats.
      </p>

      {/* Carousel Wrapper */}
      <div>
        <motion.div className="flex items-center gap-6 scrollbar-hide  overflow-hidden pb-4">
          {amenities.map((a, index) => (
            <div
              key={index}
              className="min-w-[600px] w-[250px] md:w-[300px] flex-shrink-0 text-center select-none"
            >
              <img
                src={a.img}
                alt={a.title}
                className="h-[80vh] w-full object-cover mb-3"
                draggable={false}
              />
              <p className="text-sm md:text-base uppercase tracking-wider text-gray-700">
                {a.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero4;
