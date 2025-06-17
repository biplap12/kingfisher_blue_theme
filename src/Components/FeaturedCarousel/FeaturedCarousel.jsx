

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AUTO_SCROLL_INTERVAL = 4000; // 5 seconds

const FeaturedCarousel = ({ posts }) => {

  const navigate = useNavigate();

  const handleReadArticle = () => {
    navigate(`/blog/${posts.id}`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = posts.slice(0, 4);

  // Using ref to hold interval id, so we can clear/reset it on user interaction
  const autoScrollRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  // Reset auto scroll interval on manual navigation
  const resetAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    // Start auto scroll on mount
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SCROLL_INTERVAL);

    // Cleanup on unmount
    return () => clearInterval(autoScrollRef.current);
  }, [featuredPosts.length]);

  // Also reset timer when currentIndex changes (from manual or auto)
  useEffect(() => {
    resetAutoScroll();
  }, [currentIndex]);

  return (
    <div className="relative">
      {/* Main container with fixed height */}
      <div className="inline-flex items-center ">
       
        <span className="glitter-text px-4 py-2 rounded-full text-lg font-extrabold tracking-wide absolute -top-4 left-2">
          Major Highlights
        </span>
      </div>
      <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100/50 mb-16">
        <div className="overflow-hidden relative min-h-[500px]">
          {/* Slides wrapper: flex row */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredPosts.map((post, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 grid lg:grid-cols-2 min-h-[500px]"
              >
                {/* Left Content */}
                <div className="flex flex-col justify-center p-8 lg:p-16 space-y-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 raleway-regular text-base lg:text-lg leading-relaxed max-w-lg">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200/50 hover:bg-white hover:shadow-sm transition-all duration-200"
                      >
                        <Tag className="w-3 h-3 mr-1.5 text-gray-500" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                    <div className="flex items-center space-x-6 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-light">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-light">{post.readTime}</span>
                      </div>
                    </div>

                    <button className="group cursor-pointer inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium" onClick={handleReadArticle}>
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative lg:p-8">
                  <div className="relative h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-15 right-20 transform -translate-x-1/2">
          <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50">
            <button
              onClick={() => {
                prevSlide();
                resetAutoScroll();
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              disabled={featuredPosts.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {featuredPosts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    resetAutoScroll();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-gray-900 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide();
                resetAutoScroll();
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              disabled={featuredPosts.length <= 1}
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
