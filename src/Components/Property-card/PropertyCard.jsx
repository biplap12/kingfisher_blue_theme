import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Home,
  BedDouble,
  Mail,
  Phone,
  Check,
  UserCog2,
  X,
} from "lucide-react";

// Import data from the existing file
import { FaWhatsapp } from "react-icons/fa";
import SimpleSwiper from "./SimpleSwiper.jsx";
import SimplePagination from "../Pagination/propertyPagination.jsx";

const PropertyCard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProperties = data.slice(startIdx, startIdx + itemsPerPage);

  const handleContact = (type, property) => {
    const phone = "971501234567";
    const email = "info@luxury-properties.com";

    switch (type) {
      case "whatsapp": {
        const message = `Hello, I'm interested in ${property.Name} priced at ${property.price}`;
        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;
      }
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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
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
                    images={property.galleryImages.map(
                      (image) => image.imageUrl
                    )}
                    propertyName={property.name}
                    globalIndex={globalIndex}
                  />
                </div>

                {/* Property Details */}
                <div className="px-6 pb-6">
                  {/* Title and Price */}
                  <div className="mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold  text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {property.name}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-xl lg:text-2xl font-bold text-green-600 paragraph-font tracking-wide">
                        {property.price}
                      </p>
                      <div className="flex items-center text-gray-500">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.location}</span>
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
                        <p className="text-xs text-gray-500 uppercase font-bold">
                          Type
                        </p>
                        <p className="font-medium text-gray-900 ">
                          {property.propertyType.name}
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
                          {property.developer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl capitalize">
                      <div
                        className={`p-2 rounded-lg ${
                          property.Status === "available"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        {property.Status === "available" ? (
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
                          className={`font-medium paragraph-font tracking-wide  ${
                            property.Status === "available"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {property.status}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleContact("email", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium  text-sm lg:text-xl"
                    >
                      <Mail size={18} />
                      <span>Email</span>
                    </button>

                    <button
                      onClick={() => handleContact("whatsapp", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-medium text-sm lg:text-xl"
                    >
                      <FaWhatsapp size={18} />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => handleContact("call", property)}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm lg:text-xl"
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
