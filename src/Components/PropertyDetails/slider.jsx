import { useEffect, useRef, useState } from "react";
import slides from "../../data/hero";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Detect swipe
  const handlePointerDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    touchEndX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) nextSlide();
      else if (distance < -50) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSlideClass = (index) => {
    if (index === currentSlide) return "z-30 scale-100 opacity-100";
    if (
      index === (currentSlide - 1 + slides.length) % slides.length ||
      index === (currentSlide + 1) % slides.length
    )
      return "z-20 scale-90 opacity-60 cursor-grab";
    return "hidden md:block z-10 scale-75 opacity-0";
  };

  return (
    <div
      className="relative w-full h-screen bg-transparent overflow-hidden flex items-center justify-center group select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="relative flex items-center justify-center w-full max-w-[1400px] h-[90%]">
        {slides.map((slide, index) => {
          const isPrev =
            index === (currentSlide - 1 + slides.length) % slides.length;
          const isNext = index === (currentSlide + 1) % slides.length;

          return (
            <div
              key={index}
              onClick={() => {
                if (isPrev || isNext) setCurrentSlide(index);
              }}
              className={`absolute transition-all duration-700 ease-in-out transform w-[70%] md:w-[60%] h-full rounded-xl overflow-hidden ${getSlideClass(
                index
              )}`}
              style={{
                left:
                  index === currentSlide
                    ? "50%"
                    : isPrev
                    ? "15%"
                    : isNext
                    ? "85%"
                    : "50%",
                transform:
                  index === currentSlide
                    ? "translateX(-50%) scale(1)"
                    : isPrev || isNext
                    ? "translateX(-50%) scale(0.9)"
                    : "translateX(-50%) scale(0.75)",
                transition: "all 0.7s ease-in-out",
                opacity:
                  index === currentSlide ? 1 : isPrev || isNext ? 0.6 : 0,
                cursor: isPrev || isNext ? "grab" : "default",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button> */}

      {/* Play / Pause */}
      <button
        onClick={() => setIsAutoPlaying((prev) => !prev)}
        className="absolute top-4 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
      >
        {isAutoPlaying ? (
          <Pause className="h-4 w-4 text-white" />
        ) : (
          <Play className="h-4 w-4 text-white" />
        )}
      </button>
    </div>
  );
};

export default Slider;
