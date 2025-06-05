import React from "react";
import { MapPin, MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const properties = [
  {
    title: "DAMAC Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "FROM USD 354,000",
    image: "https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141643-0-Elo-3.jpg", 
  },
  {
    title: "DAMAC Islands",
    location: "Dubailand, Dubai, UAE",
    price: "FROM USD 678,000",
    image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65262233-0-DAMAC-Islands.jpg",
  },
  {
    title: "Violet",
    location: "DAMAC Hills 2, Dubai, UAE",
    price: "FROM USD 534,000",
    image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306738-0-Violet-Listing.jpg",
  },
  // {
  //   title: "DAMAC Lagoons – Mykonos",
  //   location: "Dubailand, Dubai, UAE",
  //   price: "FROM USD 790,000",
  //   image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306739-0-Mykonos-Listing.jpg",
  // },
  // {
  //   title: "ELO",
  //   location: "Sheikh Zayed Road, Dubai, UAE",
  //   price: "FROM USD 327,000",
  //   image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141643-0-Elo-3.jpg",
  // },
  // {
  //   title: "Golf Greens",
  //   location: "DAMAC Hills, Dubai, UAE",
  //   price: "FROM USD 382,000",
  //   image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65141644-0-Golf-Greens-1.jpg",
  // },
  // {
  //   title: "Safa Gate",
  //   location: "DAMAC Hills 2, Dubai, UAE",
  //   price: "FROM USD 541,000",
  //   image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65347429-0-SAFA-Gate-Listing.jpg",
  // },
  // {
  //   title: "DAMAC Lagoon Views",
  //   location: "Dubailand, Dubai, UAE",
  //   price: "FROM USD 354,000",
  //   image: "//v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1,width=280/u/a43967b2/65306750-0-Lagoon-Views-Listing.jpg",
  // },
  
];

const IconicProperties = () => {
  const navigate = useNavigate();
  const redirectAllProperty =()=>{
    navigate('/all-property-page')
  }
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-serif font-bold mb-4">EXPLORE OUR ICONIC PROPERTIES</h2>
      <p className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
        Kingfisher is celebrated for creating refined residential towers, vibrant master-planned communities, and exclusive coastal retreats. From contemporary apartments in dynamic cityscapes to serene, luxury island residences, each property is a fusion of architectural excellence, modern innovation, and premium lifestyle amenities — offering residents an extraordinary place to call home.
      </p>

      <Link to={"/all-property-page"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-80 object-cover"
            />
            {/* <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="text-left">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                  {property.location}
                </p>
                <p className="text-md text-[#b8860b] font-bold mt-3">
                  {property.price}
                  <sup className="text-sm font-normal text-gray-500">*</sup>
                </p>
              </div>
            </div> */}
            <div className="border-t px-4 py-3 text-left">
              <button className="flex items-center gap-2 text-[#003f2e] font-bold hover:underline">
                <MoveRight className="w-5 h-5" />
                ENQUIRE NOW
              </button>
            </div>
          </div>
        ))}
      </Link>
   <div className="flex justify-center items-center w-full py-4">
  <button onClick={redirectAllProperty} className="px-6 py-2 bg-[#232266] text-white font-semibold rounded hover:bg-[#605f98] transition cursor-pointer">
    View All
  </button>
</div>

    </section>
  );
};

export default IconicProperties;
