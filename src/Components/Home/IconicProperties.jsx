import React from "react";
import { MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    title: "Kingfisher Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "$354,000",
    image:
      // "https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141643-0-Elo-3.jpg",
      "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kingfisher Islands",
    location: "Dubailand, Dubai, UAE",
    price: "$678,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65262233-0-Kingfisher-Islands.jpg",
      "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Violet",
    location: "Kingfisher Hills 2, Dubai, UAE",
    price: "$534,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306738-0-Violet-Listing.jpg",
      "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kingfisher Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "$790,000",
    image:
      // "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306739-0-Mykonos-Listing.jpg",
      "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const text = [
  {
    title: "Explore Our Iconic Properties",
    description:
      "Kingfisher Real Estate is recognized for developing premium residential towers, exclusive communities, and luxurious resort-style homes. From contemporary apartments in prime city locations to serene urban getaways, each property showcases modern design and high-end amenities, delivering a refined and elevated living experience.",
  },
];

const IconicProperties = () => {
  const navigate = useNavigate();

  return (
    <section id="properties" className="py-20 px-6 lightSection">
      <div className="text-center mb-14">
        {text.map((textItem, index) => (
          <div key={index + "iconic property"}>
            <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
              {textItem.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-7xl mx-auto raleway-regular">
              {textItem.description}
            </p>
          </div>
        ))}
      </div>
      {/* grid md:grid-cols-4 gap-4 mx-30 mb-20 */}
      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 md:mx-24">
        {properties.map((property, index) => (
          <div
            key={index}
            className="border border-gray-300  rounded-lg overflow-hidden group hover:shadow-lg transition duration-300 "
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-72 transition-transform duration-300"
            />
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="text-md font-bold text-gray-900">
                  {property.title}
                </h3>
                <p className="text-sm paragraph-font tracking-wide text-gray-600 flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </p>
              </div>
              <p className="text-black font-bold text-md mb-2">
                FROM <span className="text-green-600">{property.price}</span>
              </p>
              <div className="mt-4">
                <button
                  className="flex paragraph-font tracking-wide items-center justify-center px-4 py-2 rounded-xl border-2 border-[#f6bc6d] text-black hover:bg-[#f6bc6d] hover:text-black transition-colors duration-300 cursor-pointer"
                  onClick={() => navigate("/enquiry")}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center ">
        <button
          onClick={() => navigate("/properties")}
          className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f6bc6d] text-black text-base font-medium tracking-wide hover:bg-[#f6bd6dcf] transition duration-300 ease-in-out shadow-sm hover:shadow-lg cursor-pointer"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default IconicProperties;
