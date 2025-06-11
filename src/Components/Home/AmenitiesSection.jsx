import React, { useRef } from "react"; 
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  { title: "CLUB HOUSE", img: "/new/6.jpg" },
  { title: "STATE-OF-THE ART GYM", img: "/new/2.jpg" },
  { title: "CONTEMPORARY WORKING SPACES", img: "/new/1.jpg" },
  { title: "EV CHARGING STATIONS", img: "/new/4.jpg" },
  { title: "STATE-OF-THE ART GYM", img: "/new/3.jpg" },
  { title: "CONTEMPORARY WORKING SPACES", img: "/new/8.jpg" },
  { title: "EV CHARGING STATIONS", img: "/new/7.jpg" },
];

const AmenitiesSection = () => {
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
    <section id="amenities" className="relative -z-10 py-8 px-4 md:px-16 mx-25 lightSection">
      <h2 className="text-center text-4xl md:text-5xl  tracking-widest mb-16 heading-font">
        AMENITIES
      </h2>

      {/* Vertical Text */}
      <p className="absolute left-0 top-[65%] text-center -translate-y-1/2 -rotate-90 origin-left text-2xl tracking-wider font-light hidden lg:block text-black">
        REVITALISE. RECHARGE. <br /> REIMAGINE.
      </p>

      {/* Carousel Wrapper */}
      <div>
        <motion.div
          ref={carouselRef}
          className="flex items-end gap-6 overflow-hidden scrollbar-hide  pb-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragMomentum={true}
          style={{ cursor: "grab" }}
        >
          {amenities.map((a, index) => (
            <div
              key={index}
              className="min-w-[300px] w-[250px] -z-10 md:w-[300px] flex-shrink-0 text-center select-none"
            >
              <img
                src={a.img}
                alt={a.title}
                className="h-78 w-full object-cover mb-3"
                draggable={false}
              />
              <p className="text-sm md:text-base uppercase tracking-wider text-gray-700">
                {a.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Buttons below carousel */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => scrollBy("prev")}
            className="p-3 transition cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollBy("next")}
            className="p-3 transition cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
