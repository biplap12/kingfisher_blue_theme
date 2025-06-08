import React from "react";

const Gallery = () => {
  const lifestyle = [
    { title: "MARINA-SIDE BLISS", desc: "A first-line marina facing property, with stunning views and interconnected promenades.", img: "/gallery/img1.jpg", span: 2 },
    { title: "RESORT-LIKE COMFORT", img: "/gallery/img2.jpg" },
    { title: "URBAN VITALITY", img: "/gallery/img3.jpg" },
    { title: "SUNSET VIEWS", img: "/gallery/img4.jpg" },
    { title: "ISLAND LIFE", img: "/gallery/img5.jpg" },
  ];

  const text =[
    {
      title:"Enriched By The Apartment",
      description:"Set your mind adrift from a marina reimagined"
    }
  ]
  


  return (
    <>
   <div className="flex justify-center items-center mt-20 flex-col mb-20"> 
  {text.map((item, index) => {
    return (
      <div key={index} className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl tracking-widest text-[#1e2c3a] uppercase heading-font">
          {item.title}
        </h1>
        <p className="text-lg mt-5 p-font-style paragraph-font">
          {item.description}
        </p>
      </div>
    )
  })}
</div>
    <div className="grid md:grid-cols-4 gap-4 mx-30 mb-20">
      {lifestyle.map((item, index) => (
        <div
          key={index}
          className={`relative text-white h-80 bg-cover bg-center ${
            item.span === 2 ? "md:col-span-2 md:row-span-2 h-[660px]" : ""
          }`}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.desc && <p className="text-sm mt-2">{item.desc}</p>}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery
