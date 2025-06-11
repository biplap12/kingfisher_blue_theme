import React from "react";
import { MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    title: "Kingfisher Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "FROM $354,000",
    image:
      // "https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141643-0-Elo-3.jpg",
      "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kingfisher Islands",
    location: "Dubailand, Dubai, UAE",
    price: "FROM $678,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65262233-0-Kingfisher-Islands.jpg",
      "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Violet",
    location: "Kingfisher Hills 2, Dubai, UAE",
    price: "FROM $534,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306738-0-Violet-Listing.jpg",
      "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kingfisher Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "FROM $790,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306739-0-Mykonos-Listing.jpg",
      "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const IconicProperties = () => {
  const navigate = useNavigate();

  return (
    <section id="apartments" className="py-20 px-6 lightSection">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
          Explore Our Iconic Properties
        </h2>
        <p className="text-lg text-gray-500 max-w-4xl mx-auto paragraph-font">
          Kingfisher is celebrated for creating refined residential towers,
          vibrant master-planned communities, and exclusive coastal retreats...
        </p>
      </div>

      <div  className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 md:mx-24">
        {properties.map((property, index) => (
          <div
            key={index}
            className="relative border border-gray-300  rounded-lg overflow-hidden group hover:shadow-lg transition duration-300 -z-50"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 "
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
                <div onClick={()=>navigate("/enquiry")} className="flex items-center text-center text-sm justify-center gap-1 cursor-pointer border-t border-gray-400 hover:text-yellow-500 py-2 transition">
                  <span>ENQUIRE NOW </span>
                  <MoveRight size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center ">
        <button
          onClick={() => navigate("/properties")}
          className="w-fit p-2 cursor-pointer bg-[#4746a3] text-white   rounded-lg hover:bg-yellow-500 transition"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default IconicProperties;
