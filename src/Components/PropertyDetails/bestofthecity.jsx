import React from "react";

const BestOfthecity = () => {
  const features = [
    {
      title: "Business Center",
      img: "/icons/building.png",
      alt: "Business Center Icon",
    },
    {
      title: "Dubai Marina",
      img: "/icons/marina-bay-sands.png",
      alt: "Dubai Marina Icon",
    },
    {
      title: "Downtown Dubai",
      img: "/icons/office.png",
      alt: "Downtown Dubai Icon",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-100 rounded-3xl max-w-fit mx-auto mt-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-56 h-36 p-4 bg-white rounded-2xl transition duration-300 text-center"
        >
          <img
            src={feature.img}
            alt={feature.alt}
            className="w-12 h-12 mb-3 object-contain"
            loading="lazy"
          />
          <p className="text-gray-800 font-semibold text-sm">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BestOfthecity;
