import React from "react";
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
} from "lucide-react"; // Lucide icons

export default function PropertyCard({ property }) {
  return (
    <div className=" text-[#F5BC6D] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden h-[400px] flex flex-col transition-transform hover:scale-[1.03] duration-300">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white text-[#232266] text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-5">
        {/* Title + Location */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight mb-1 truncate">
            {property.title}
          </h3>
          <p className="text-sm text-gray-400 flex items-center gap-2 truncate">
            <MapPin size={14} className="text-gray-500" />
            {property.location}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5 space-y-2">
          <div className="flex justify-between text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <BedDouble size={16} /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-2">
              <Bath size={16} /> {property.baths} Baths
            </span>
            <span className="flex items-center gap-2">
              <Ruler size={16} /> {property.area} sqft
            </span>
          </div>
        </div>

        {/* Price + Action */}
        <div className="pt-4 mt-4 border-t border-gray-800 flex justify-between items-center">
          <p className="text-2xl font-bold text-white">
            ${property.price.toLocaleString()}
          </p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
