import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination as SwiperPagination,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FaDollarSign, FaMapMarkerAlt, FaHome, FaBed } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import data from "../../data/propertycard.js";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "../Pagination/Pagination.jsx";

const PropertyCard = () => {
  const [thumbsSwipers, setThumbsSwipers] = useState({});
  const [mainSwipers, setMainSwipers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6; // Show 6 items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProperties = data.slice(startIdx, startIdx + itemsPerPage);

  useEffect(() => {
    setMainSwipers({});
    setThumbsSwipers({});
  }, [currentPage]);

  return (
    <div className="w-11/12 mx-auto p-6 space-y-14">
      {/* Back Link */}
      <div className="mt-8">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900 transition"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* Grid container: 1 col on small screens, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {currentProperties.map((property, index) => {
          const globalIndex = startIdx + index;

          return (
            <div
              key={globalIndex}
              className="bg-white  rounded-2xl overflow-hidden  border border-gray-300 transition-shadow duration-300 flex flex-col"
            >
              {/* Swiper Section */}
              <div className="w-full relative group p-4">
                <Swiper
                  modules={[Navigation, SwiperPagination, Thumbs]}
                  thumbs={{ swiper: thumbsSwipers[globalIndex] }}
                  navigation={{
                    prevEl: `.main-prev-${globalIndex}`,
                    nextEl: `.main-next-${globalIndex}`,
                  }}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) =>
                    setMainSwipers((prev) => ({
                      ...prev,
                      [globalIndex]: swiper,
                    }))
                  }
                  className="rounded-xl"
                >
                  {property.images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`${property.Name} Slide ${idx + 1}`}
                        className="w-full h-64 md:h-96 object-cover rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className={`main-prev-${globalIndex} absolute top-1/2 left-3 z-20 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className={`main-next-${globalIndex} absolute top-1/2 right-3 z-20 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition`}
                >
                  <ChevronRight size={20} />
                </button>

                <div className="relative mt-4">
                  <Swiper
                    onSwiper={(swiper) =>
                      setThumbsSwipers((prev) => ({
                        ...prev,
                        [globalIndex]: swiper,
                      }))
                    }
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode
                    watchSlidesProgress
                    modules={[Thumbs, Navigation]}
                    navigation={{
                      prevEl: `.thumb-prev-${globalIndex}`,
                      nextEl: `.thumb-next-${globalIndex}`,
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

                  <button
                    className={`thumb-prev-${globalIndex} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1`}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className={`thumb-next-${globalIndex} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full p-3 md:p-4 flex flex-col justify-start  bg-gradient-to-tr from-gray-50 to-white">
                <h1 className="text-3xl md:text-4xl font-extrabold heading-font mb-6">
                  {property.Name}
                </h1>

                <div className="grid grid-row-2 gap-6 md:gap-2 text-gray-700 text-md">
                  <div className="flex items-center justify-between bg-white rounded-xl p-2 border border-gray-200  transition-shadow  cursor-pointer">
                    <div className="flex justify-center items-center gap-5">
                      {" "}
                      <span className="p-3 bg-red-100 text-gray-500 rounded-full shadow-sm">
                        <FaDollarSign size={16} />
                      </span>
                      <span className="block font-semibold text-gray-900 mb-1">
                        Price From
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-500 font-bold">
                        $1,200,000
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white rounded-xl p-2 border border-gray-200  transition-shadow cursor-pointer">
                    <div className="flex justify-center items-center gap-5">
                      <div className="p-3 bg-blue-100  rounded-full shadow-sm">
                        <FaMapMarkerAlt size={16} />
                      </div>
                      <div>
                        <span className="block font-semibold text-gray-900 mb-1">
                          Location
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-700">Downtown, City</div>
                  </div>

                  <div className="flex items-center justify-between bg-white rounded-xl p-2 border border-gray-200  transition-shadow cursor-pointer">
                    <div className="flex justify-center items-center gap-5">
                      <div className="p-3 bg-green-100  rounded-full shadow-sm">
                        <FaHome size={16} />
                      </div>
                      <span className="block font-semibold text-gray-900 mb-1">
                        Type
                      </span>
                    </div>
                    <div className="text-gray-700 ">Apartment</div>
                  </div>

                  <div className="flex items-center justify-between bg-white rounded-xl p-2 border border-gray-200  transition-shadow cursor-pointer">
                    <div className="flex justify-center items-center gap-5">
                      <div className="p-3 bg-yellow-100  rounded-full shadow-sm">
                        <FaBed size={16} />
                      </div>
                      <span className="block font-semibold text-gray-900 mb-1">
                        Beds
                      </span>
                    </div>
                    <span className="text-gray-700 ">3</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 md:mt-5 flex flex-wrap  gap-5 items-center justify-center">
                  <a
                    href="mailto:info@example.com"
                    className="flex items-center text-center justify-center gap-3 px-3 py-2 border w-[12rem]  border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition shadow-sm"
                  >
                    <MdEmail className="text-2xl" />
                    Mail
                  </a>
                  <button
                    onClick={() => {
                      const phone = "971501234567";
                      const message = `Hello, I'm interested in ${property.Name}`;
                      window.open(
                        `https://wa.me/${phone}?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                    className="flex items-center gap-3 px-3 text-center justify-center py-2 w-[12rem] border border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition shadow-sm"
                  >
                    <BsWhatsapp className="text-2xl" />
                    WhatsApp
                  </button>
                  <a
                    href="tel:971501234567"
                    className="flex items-center text-center justify-center  gap-3 px-3 py-2 w-[12rem] border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition shadow-sm"
                  >
                    <IoIosCall className="text-2xl" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PropertyCard;
