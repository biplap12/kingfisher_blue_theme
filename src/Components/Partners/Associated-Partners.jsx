import React from "react";

const logos = [
  "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740",
  "https://logomaster.ai/hs-fs/hubfs/lettermark-logo-cnn.jpg?width=1700&height=1148&name=lettermark-logo-cnn.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  
];

const PartnerLogos = () => {
  return (
    <section id="partners" className="bg-white h-auto flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-center text-3xl md:text-5xl tracking-wide mb-6 uppercase heading-font">
        Associated Partners
      </h2>
      <p className="text-lg text-center text-gray-500 max-w-6xl mx-auto mb-14 raleway-regular">
       Associated Partners is known for delivering high-end residential developments, vibrant communities, and exclusive resort-inspired properties. From modern apartments in key urban centers to peaceful, upscale retreats, each project is thoughtfully designed with premium amenities to provide an exceptional standard of living.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  w-full max-w-6xl">
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center py-10 p-4 border border-zinc-200 transition"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
