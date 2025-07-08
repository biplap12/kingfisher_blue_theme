import { Bed, Bath, MapPin, Ruler } from "lucide-react";
import { motion } from "framer-motion";

export default function ApartmentCard({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  size,
  imageUrl,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl overflow-hidden bg-white transition-all duration-300 w-full max-w-sm "
    >
      {/* Image */}
      <div className="h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            {location}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            {bedrooms} Beds
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {bathrooms} Baths
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            {size}
          </div>
        </div>

        <div className="border-t pt-3 space-y-2 text-sm text-gray-700">
          <div>
            <h3 className="font-medium text-gray-800">Ranging From</h3>
            <p className="text-sm">
              AED 10.61 M | INR 24.6 CR | USD 2.91 M | EUR 2.87 M | GBP 2.36 M
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">To</h3>
            <p className="text-sm">
              AED 18.75 M | INR 43.4 CR | USD 5.14 M | EUR 5.08 M | GBP 4.19 M
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Handover</h3>
            <p>Dec 2027</p>
            <p className="text-xs text-gray-500 mt-1">
              *Subject to availability
              <br />
              *Exchange rates may vary
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="mt-4 w-full rounded-xl border border-zinc-500 text-black font-medium py-2 transition hover:brightness-110">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
