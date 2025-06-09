import React from "react";
import { MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    title: "DAMAC Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "FROM USD 354,000",
    image:
      "https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141643-0-Elo-3.jpg",
  },
  {
    title: "DAMAC Islands",
    location: "Dubailand, Dubai, UAE",
    price: "FROM USD 678,000",
    image:
      "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65262233-0-DAMAC-Islands.jpg",
  },
  {
    title: "Violet",
    location: "DAMAC Hills 2, Dubai, UAE",
    price: "FROM USD 534,000",
    image:
      "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306738-0-Violet-Listing.jpg",
  },
  {
    title: "DAMAC Lagoons – Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "FROM USD 790,000",
    image:
      "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306739-0-Mykonos-Listing.jpg",
  },
];

const IconicProperties = () => {
  const navigate = useNavigate();

  return (
    <section id="dark-section" className="py-20 px-6 bg-[#f9f9f9]">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl tracking-widest text-yellow-500 uppercase mb-6">
          Explore Our Iconic Properties
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Kingfisher is celebrated for creating refined residential towers,
          vibrant master-planned communities, and exclusive coastal retreats...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition duration-300"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-yellow-600 font-bold text-md mb-2">
                  {property.price}
                </p>
                <button className="flex items-center gap-2 text-sm text-[#232266] font-semibold hover:underline transition">
                  ENQUIRE NOW <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center ">
        <button
          onClick={() => navigate("/all-property-page")}
          className="w-full px-6 py-16 cursor-pointer bg-[#4746a3] text-white text-2xl font-semibold rounded-full hover:bg-yellow-500 transition"
        >
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default IconicProperties;
