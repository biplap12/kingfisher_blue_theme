import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../services/api";

const text = [
  {
    title: "Our Story",
    description:
      "Framed by a stunning ocean panorama, Kingfisher's newest landmark on Dubai Islands captures the essence of refined coastal living. Nestled along the marina, this exceptional development offers a seamless blend of tranquility, energy, and connectivity—where every feature is thoughtfully designed to elevate modern lifestyles.",
  },
];
const OurStorySlider = () => {
  const [loading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState([]);
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/home-galleries/active");
        if (response.data.success) {
          console.log("Gallery data:", response.data.data[0].imageUrl);
          setGalleryData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const length = galleryData.length;

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
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    isDragging.current = false;
  };

  if (!galleryData || length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No images found.</div>
    );
  }

  return (
    <>
      {/* Header */}
      <div
        id="our-story"
        className="text-center px-6 py-12 max-w-7xl mx-auto bg-secondary-color"
      >
        <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
          {text[0].title}
        </h2>
        <p className="text-lg text-gray-500 max-w-4xl mx-auto raleway-regular">
          {text[0].description}
        </p>
      </div>

      {/* Slider */}
      <div className="flex flex-col items-center w-full lightSection overflow-hidden">
        {loading ? (
          <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center gap-2 px-4 animate-pulse">
            <div className="hidden sm:block w-[10%] h-full bg-gray-200 rounded-xl" />
            <div className="w-full sm:w-[80%] h-full bg-gray-300 rounded-xl shadow-lg" />
            <div className="hidden sm:block w-[10%] h-full bg-gray-200 rounded-xl" />
          </div>
        ) : (
          <div
            className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center overflow-visible touch-none px-4"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
          >
            {/* Left */}
            <img
              src={galleryData[getIndex(current - 1)].imageUrl}
              alt="Prev Slide"
              className="hidden sm:block absolute left-0 -z-20 top-0 w-[10%] h-full object-cover opacity-80 transform -translate-x-6 transition-all duration-500 rounded-xl"
            />

            <img
              src={galleryData[current].imageUrl}
              alt="Current Slide"
              className="w-full sm:w-[80%] h-full object-cover -z-20 shadow-lg transition-all duration-500 rounded-xl"
            />

            <img
              src={galleryData[getIndex(current + 1)].imageUrl}
              alt="Next Slide"
              className="hidden sm:block absolute right-0 -z-20 top-0 w-[10%] h-full object-cover opacity-80 transform translate-x-6 transition-all duration-500 rounded-xl"
            />
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-between items-center mt-6 w-full max-w-7xl px-2">
          <div className="text-gray-700 text-sm">
            {loading ? "-- / -- images" : `${current + 1} / ${length} images`}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white hover:bg-zinc-100 shadow transition"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white hover:bg-zinc-100 shadow transition"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStorySlider;
