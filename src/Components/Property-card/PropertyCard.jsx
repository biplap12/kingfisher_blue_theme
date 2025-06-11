import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsWhatsapp } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import data from '../../data/propertyCard.js'
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


const PropertyCard = () => {
  return (
    <div className="flex flex-col gap-10 p-6 w-11/12 mx-auto">
        {/* Back Link */}
      <div className="  mt-6 md:mt-10">
        <Link to='/' className="flex items-center text-gray-700"><ArrowLeft size={15} className="mr-1" /> Back</Link>
      </div>
      {data.map((property, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row bg-white  overflow-hidden"
        >
          {/* Swiper Section */}
          <div className="lg:w-3/5 w-full  h-[400px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {property.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`${property.Name} Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Details Section */}
          {/* Details Section */}
          <div className="lg:w-2/5 w-full p-8 flex flex-col justify-center  bg-white ">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 pb-2 sub-heading-font ">{property.Name}</h1>

            <div className="space-y-4 text-gray-700 text-[17px] leading-relaxed">
              <div className="flex items-center gap-5 border border-gray-300 rounded-md p-2 bg-gray-50">
                <span className="font-semibold"> Price from:</span>
                <span className="text-red-600 font-bold">{property.priceFrom}</span>
              </div>

              <div className="flex items-center gap-5 border border-gray-300 rounded-md p-2 bg-gray-50">
                <span className="font-semibold">Location:</span>
                <span>{property.Location}</span>
              </div>


              <div className="flex items-center gap-5 border border-gray-300 rounded-md p-2 bg-gray-50">
                <span className="font-semibold"> Type:</span>
                <span>{property.Type}</span>
              </div>

              <div className="flex items-center gap-5 border border-gray-300 rounded-md p-2 bg-gray-50">
                <span className="font-semibold"> Beds:</span>
                <span>{property.Beds}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Email */}
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                <MdEmail className="text-xl" />
                EMAIL
              </a>

              {/* Call */}
              <a
                href="tel:971501234567"
                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                <IoIosCall className="text-xl" />
                CALL
              </a>

              {/* WhatsApp */}
              <button
                onClick={() => {
                  const phone = '971501234567';
                  const message = `Hello, I'm interested in ${property.Name}`;
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                <BsWhatsapp className="text-xl" />
                WHATSAPP
              </button>
            </div>
          </div>


        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
