import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { BsWhatsapp } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import data from '../../data/propertyCard.js';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyCard = () => {
  const [thumbsSwipers, setThumbsSwipers] = useState({});
  const [mainSwipers, setMainSwipers] = useState({});

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-14">
      {/* Back Link */}
      <div className="mt-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition">
          <ArrowLeft size={18} className="mr-2" /> Back to listings
        </Link>
      </div>

      {data.map((property, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-md border border-gray-300 transition-shadow duration-300"
        >
          {/* Swiper Section */}
          <div className="lg:w-3/5 w-full relative group p-4">
            {/* Main Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwipers[index] }}
              navigation={{
                prevEl: `.main-prev-${index}`,
                nextEl: `.main-next-${index}`,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => setMainSwipers((prev) => ({ ...prev, [index]: swiper }))}
              className="rounded-xl"
            >
              {property.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`${property.Name} Slide ${idx + 1}`}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Main Nav Buttons */}
            <button
              className={`main-prev-${index} absolute top-1/2 left-3 z-20 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className={`main-next-${index} absolute top-1/2 right-3 z-20 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Thumbnail Swiper */}
            <div className="relative mt-4">
              <Swiper
                onSwiper={(swiper) => setThumbsSwipers((prev) => ({ ...prev, [index]: swiper }))}
                spaceBetween={10}
                slidesPerView={5}
                freeMode
                watchSlidesProgress
                modules={[Thumbs, Navigation]}
                navigation={{
                  prevEl: `.thumb-prev-${index}`,
                  nextEl: `.thumb-next-${index}`,
                }}
                className="rounded-lg"
              >
                {property.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`Thumb ${idx + 1}`}
                      className="h-20 w-full object-cover rounded-md border border-gray-300 cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Nav Buttons */}
              <button
                className={`thumb-prev-${index} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className={`thumb-next-${index} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-2/5 w-full p-10 flex flex-col justify-center bg-gradient-to-tr from-gray-50 to-white">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6 sub-heading-font">
                {property.Name}
              </h1>

              <div className="grid grid-cols-2 gap-6 text-gray-700 text-lg">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                  <span className="font-semibold mb-1">Price From</span>
                  <span className="text-red-600 font-bold">{property.priceFrom}</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                  <span className="font-semibold mb-1">Location</span>
                  <span>{property.Location}</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                  <span className="font-semibold mb-1">Type</span>
                  <span>{property.Type}</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                  <span className="font-semibold mb-1">Beds</span>
                  <span>{property.Beds}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
              {/* Email */}
              <a
                href="mailto:info@example.com"
                title="Send Email"
                className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition shadow-sm"
              >
                <MdEmail className="text-2xl" />
              </a>

              {/* WhatsApp */}
              <button
                title="Chat on WhatsApp"
                onClick={() => {
                  const phone = '971501234567';
                  const message = `Hello, I'm interested in ${property.Name}`;
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="flex items-center gap-3 px-6 py-3 border border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition shadow-sm"
              >
                <BsWhatsapp className="text-2xl" />
              </button>

              {/* Call */}
              <a
                href="tel:971501234567"
                title="Make a Call"
                className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition shadow-sm"
              >
                <IoIosCall className="text-2xl" />
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
