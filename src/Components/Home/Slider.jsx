import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";




const Slider = ({title, description,images}) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const startX = useRef(0);
  const isDragging = useRef(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const getIndex = (index) => (index + length) % length;

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  return (
    <><div className="relative lightSection -z-[9999999]">
        {/* <div className="absolute inset-0 bg-white clip-hero-shape z-0"></div> */}
        <div id="indoor" className="relative -z-[9999999] text-center px-6 py-15 max-w-7xl mx-auto">
              <div  className="text-center ">
                <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
                  {title}
                </h2>
                <p className="text-lg  tracking-widest text-gray-500 max-w-7xl mx-auto text-justify paragraph-font">
                  {description}
                </p>
              </div>
            

       
        </div>
      </div>

    <div
      className="flex flex-col items-center w-full -z-10  overflow-hidden lightSection"
    >
      <div
        className="relative w-full -z-10 h-[500px] flex justify-center items-center overflow-visible touch-none hover:cursor-grab"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {/* Left image */}
        <img
          src={images[getIndex(current - 1)]}
          alt="Left Slide"
          className="absolute -z-10 left-0 top-0 w-[10%] h-full object-cover opacity-80 transform -translate-x-6 scale-100   transition-all duration-500"
          draggable={false}
          style={{ zIndex: 10 }}
        />

        {/* Center image */}
        <img
          src={images[current]}
          alt="Current Slide"
          className="relative  -z-10 w-[80%] h-full object-cover shadow-lg transition-all duration-500 scale-100"
          draggable={false}
          style={{ zIndex: 20 }}
        />

        {/* Right image */}
        <img
          src={images[getIndex(current + 1)]}
          alt="Right Slide"
          className="absolute -z-10 right-0 top-0 w-[10%] h-full object-cover opacity-80 transform translate-x-6 scale-100 transition-all duration-500"
          draggable={false}
          style={{ zIndex: 10 }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 w-full max-w-screen px-4">
        <div className="text-gray-700 font-semibold text-sm select-none">
          {length} images
        </div>
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-2 transition bg-transparent rounded-full hover:bg-zinc-100"
          >
            <ChevronLeft
              size={24}
              className="hover:text-yellow-500 cursor-pointer hover:scale-110"
            />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-2 transition bg-transparent rounded-full hover:bg-zinc-100"
          >
            <ChevronRight
              size={24}
              className="hover:text-yellow-500 cursor-pointer hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Slider;
