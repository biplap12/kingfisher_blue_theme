import React from "react";
import { Home, Wrench, Globe, Award } from "lucide-react";
import { MdDescription } from "react-icons/md";

const stats = [
  {
    value: "48,000+",
    label: "Homes Successfully Delivered",
    icon: <Home size={36} className="primary-color" />,
  },
  {
    value: "50,100+",
    label: "Units Under Development",
    icon: <Wrench size={36} className="primary-color" />,
  },
  {
    value: "100+",
    label: "Global Industry Awards",
    icon: <Award size={36} className="primary-color" />,
  },
  {
    value: "7",
    label: "Countries with Active Projects",
    icon: <Globe size={36} className="primary-color" />,
  },
];

const text = [
  {
    title: "WHY CHOOSE KINGFISHER ?",
    description:
      "Kingfisher Real Estate is known for delivering landmark projects marked by quality and attention to detail. Blending modern design with top-tier amenities, the company has established a strong presence across the UAE, Saudi Arabia, Qatar, and other global markets. Its diverse portfolio of upscale residential, commercial, and lifestyle properties reflects a commitment to excellence and innovation.",
  },
];

const Whykingfisher = () => {
  return (
    <section className="bg-white py-20 px-4 lightSection" id="why-us">
      <div className="max-w-7xl mx-auto text-center">
        {text.map((textItem, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
              {textItem.title}
            </h2>
            {/* <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div> */}

            <p className="text-lg mt-4 raleway-regular text-gray-500 max-w-6xl mx-auto mb-14 text-center">
              {textItem.description}
            </p>
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl p-6 flex flex-col items-center  border border-gray-300 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{stat.icon}</div>
              <p className="text-3xl font-bold text-[#003f2e]">{stat.value}</p>
              <p className="raleway-regular text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
