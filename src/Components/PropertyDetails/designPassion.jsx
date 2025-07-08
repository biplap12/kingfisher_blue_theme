import React from "react";

const DesignPassion = () => {
  const features = [
    {
      title: "Gym Enthusiast",
      img: "/icons/gym.png",
      alt: "Gym Icon",
    },
    {
      title: "Movie Buffs",
      img: "/icons/theatre.png",
      alt: "Movie Buffs Icon",
    },
    {
      title: "Child Friendly",
      img: "/icons/game.png",
      alt: "Child Friendly Icon",
    },
    {
      title: "Swimming Pool",
      img: "/icons/swimming-pool.png",
      alt: "Swimming Pool Icon",
    },
    {
      title: "Work from Home",
      img: "/icons/work-place.png",
      alt: "Work from Home Icon",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-zinc-100 rounded-3xl max-w-fit mx-auto mt-5">
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
          <p className="text-zinc-800 font-semibold text-sm">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DesignPassion;
