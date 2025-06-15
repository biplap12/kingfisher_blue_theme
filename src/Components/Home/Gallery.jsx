import React from "react";

const Gallery = () => {
  const lifestyle = [
    {
      title: "MARINA-SIDE BLISS",
      desc: "A first-line marina facing property, with stunning views and interconnected promenades.",
      img: "/gallery/img1.jpg",
      span: 2,
    },
    { title: "RESORT-LIKE COMFORT", img: "/gallery/img2.jpg" },
    { title: "URBAN VITALITY", img: "/gallery/img3.jpg" },
    { title: "SUNSET VIEWS", img: "/gallery/img4.jpg" },
    { title: "ISLAND LIFE", img: "/gallery/img5.jpg" },
  ];

  const text = [
    {
      title: "Services That Elevate Living",
      description:
        "The apartment holds a kind of quiet that doesn’t ask questions, a silence so full of memory it feels like you’re borrowing someone else’s beautifully unfinished story.",
    },
  ];

  return (
    <section id="services">
      <div
        
        className="flex justify-center items-center mt-25 flex-col lightSection"
      >
        {text.map((item, index) => {
          return (
            <div key={index} className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl tracking-widest uppercase mb-6 heading-font">
                {item.title}
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>

              <p className="text-lg tracking-wide text-gray-500 max-w-5xl mx-auto text-justify paragraph-font flex justify-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-4 gap-4 mx-30 mb-20">
        {lifestyle.map((item, index) => (
          <div
            key={index}
            className={`relative text-white h-80 bg-cover bg-center ${
              item.span === 2
                ? "md:col-span-2 md:row-span-2 h-[660px] -z-50"
                : ""
            }`}
            style={{ backgroundImage: `url(${item.img})`, zIndex: "-1" }}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.desc && <p className="text-sm mt-2">{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
