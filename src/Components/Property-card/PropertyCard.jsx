import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  MapPin,
  Home,
  BedDouble,
  Mail,
  Phone,
  MessageCircle,
  Bath,
  Check,
  UserCog,
  UserCog2,
  X,
} from "lucide-react";

// Import data from the existing file
import data from "../../data/propertycard.js";
import { FaWhatsapp } from "react-icons/fa";

// Simple Swiper Component
const SimpleSwiper = ({ images, propertyName, globalIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbsStartIndex, setThumbsStartIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextThumbs = () => {
    if (thumbsStartIndex + 4 < images.length) {
      setThumbsStartIndex(thumbsStartIndex + 1);
    }
  };

  const prevThumbs = () => {
    if (thumbsStartIndex > 0) {
      setThumbsStartIndex(thumbsStartIndex - 1);
    }
  };

  const visibleThumbs = images.slice(thumbsStartIndex, thumbsStartIndex + 4);

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 group">
        <img
          src={images[currentSlide]}
          alt={`${propertyName} - Image ${currentSlide + 1}`}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-6" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="relative mt-4">
        <div className="flex space-x-3 overflow-hidden">
          {visibleThumbs.map((image, index) => {
            const actualIndex = thumbsStartIndex + index;
            return (
              <button
                key={actualIndex}
                onClick={() => goToSlide(actualIndex)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  actualIndex === currentSlide
                    ? "border-gray-900 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${actualIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Thumbnail Navigation */}
        {thumbsStartIndex > 0 && (
          <button
            onClick={prevThumbs}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-1 hover:shadow-xl transition-shadow"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
        )}
        {thumbsStartIndex + 4 < images.length && (
          <button
            onClick={nextThumbs}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-1 hover:shadow-xl transition-shadow"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

// Simple Pagination Component
const SimplePagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentPage === page
              ? "bg-gray-900 text-white"
              : "bg-white border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const PropertyCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProperties = data.slice(startIdx, startIdx + itemsPerPage);

  const handleContact = (type, property) => {
    const phone = "971501234567";
    const email = "info@luxury-properties.com";

    switch (type) {
      case "whatsapp":
        const message = `Hello, I'm interested in ${property.Name} priced at ${property.price}`;
        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;
      case "call":
        window.open(`tel:${phone}`, "_blank");
        break;
      case "email":
        window.open(
          `mailto:${email}?subject=Inquiry about ${property.Name}&body=Hello, I'm interested in learning more about ${property.Name} listed at ${property.price}.`,
          "_blank"
        );
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {currentProperties.map((property, index) => {
            const globalIndex = startIdx + index;

            return (
              <div
                key={property.id || globalIndex}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                {/* Image Gallery */}
                <div className="p-6 pb-4">
                  <SimpleSwiper
                    images={property.images}
                    propertyName={property.Name}
                    globalIndex={globalIndex}
                  />
                </div>

                {/* Property Details */}
                <div className="px-6 pb-6">
                  {/* Title and Price */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold paragraph-font tracking-wide text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {property.Name}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-green-600 paragraph-font tracking-wide">
                        {property.priceFrom}
                      </p>
                      <div className="flex items-center text-gray-500">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.Location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Home size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">
                          Type
                        </p>
                        <p className="font-medium text-gray-900 paragraph-font tracking-wide">
                          {property.Type}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-pink-100 rounded-lg">
                        <BedDouble size={16} className="text-pink-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">
                          Bedrooms
                        </p>
                        <p className="font-medium text-gray-900 paragraph-font tracking-wide">
                          {property.Beds}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <UserCog2 size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">
                          Developer
                        </p>
                        <p className="font-medium text-gray-900 paragraph-font tracking-wide">
                          {property.Developer}
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Check size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Status</p>
                        <p className="font-medium text-gray-900 paragraph-font tracking-wide">{property.Status}</p>
                      </div>
                    </div> */}

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div
                        className={`p-2 rounded-lg ${
                          property.Status === "Available"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        {property.Status === "Available" ? (
                          <Check size={16} className="text-green-600" />
                        ) : (
                          <X size={16} className="text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">
                          Status
                        </p>
                        <p
                          className={`font-medium paragraph-font tracking-wide ${
                            property.Status === "Available"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {property.Status}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleContact("email", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      <Mail size={18} />
                      <span>Email</span>
                    </button>

                    <button
                      onClick={() => handleContact("whatsapp", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-medium"
                    >
                      <FaWhatsapp size={18} />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => handleContact("call", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Phone size={18} />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PropertyCard;
