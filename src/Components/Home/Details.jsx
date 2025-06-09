import React from "react";
import {
  CircleCheckBig,
  CreditCard,
  Download,
  MapPin,
  Tag,
} from "lucide-react";

const data = [
  {
    label: "Location",
    value: "Dubai Islands",
    icon: <MapPin size={16} />,
  },
  {
    label: "Payment Plan",
    value: "60/40",
    icon: <CreditCard size={16} />,
  },
  {
    label: "Starting at",
    value: "2.1 M AED",
    icon: <Tag size={16} />,
  },
  {
    label: "Delivery Date",
    value: "Q1 2027",
    icon: <CircleCheckBig size={16} />,
  },
];

const navItems = [
  "Gallery",
  "Dubai Islands",
  "Amenities",
  "Location",
  "Payment Plan",
  "Apartments",
];

const text = [
  {
    title: "Beyond the Final Light",
    description: `Set against the breathtaking backdrop of the ocean, Côtier House
stands as a stunning new gem on the Dubai Islands. Nestled along the
marina, it offers a serene and vibrant retreat, perfectly connected
to the rhythms of refined coastal living. Every element is
thoughtfully crafted to inspire a life of elegance, where the
exceptional is simply everyday.`,
  },
];

const Hero2 = () => {
  return (
    <div
      id="dark-section"
      className="text-[#1e1e1e] min-h-screen w-full primary-background-color"
    >
      {/* Top Info Section */}
      <div className="w-full px-6 py-20 grid grid-cols-2 md:grid-cols-4 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== data.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <p className="text-xs mb-1 uppercase tracking-wider flex justify-center gap-2 paragraph-font">
              {item.icon}
              {item.label}
            </p>
            <p className="text-4xl text-yellow-500 tracking-wider">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="text-center text-sm uppercase tracking-widest mt-4 space-x-4">
        {navItems.map((item, idx) => (
          <span
            key={idx}
            className="text-[#1e2c3a] hover:underline cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Curved Hero Section */}
      <div className="relative ">
        {/* <div className="absolute inset-0 bg-white clip-hero-shape z-0"></div> */}
        <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
          {text.map((item, index) => {
            return (
              <div key={index} className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl tracking-widest text-yellow-500 uppercase mb-6">
                  {item.title}
                </h1>
                <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto p-font-style">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="border border-gray-700 px-6 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-200">
              <Download className="w-4 h-4" /> Download Brochure
            </button>
            <button className="border border-gray-700 px-6 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-200">
              <Download className="w-4 h-4" /> Download Fact Sheet
            </button>
          </div>
        </div>
      </div>

      {/* Custom clip-path shape */}
      <style>
        {`
          .clip-hero-shape {
            clip-path: polygon(0 0, 100% 0, 100% 65%, 50% 80%, 0 65%);
          }
        `}
      </style>
    </div>
  );
};

export default Hero2;
