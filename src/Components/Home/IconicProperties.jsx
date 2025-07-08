// import React, { useState, useEffect, useRef } from "react";
// import { MapPin, ArrowRight, Building } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import { showErrorToast } from "../../config/toastConfig";

// const fallbackProperties = [
//   {
//     _id: "1",
//     name: "Kingfisher Riverside Views",
//     location: "Dubai Investment Park 2, UAE",
//     price: "$354,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     _id: "2",
//     name: "Kingfisher Islands",
//     location: "Dubailand, Dubai, UAE",
//     price: "$678,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
//   },
//   {
//     _id: "3",
//     name: "Violet",
//     location: "Kingfisher Hills 2, Dubai, UAE",
//     price: "$534,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     _id: "4",
//     name: "Kingfisher Lagoons - Mykonos",
//     location: "Dubailand, Dubai, UAE",
//     price: "$790,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
//   },
// ];

// const sectionText = {
//   title: "Explore Our Iconic Properties",
//   description:
//     "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
// };

// export default function IconicProperties() {
//   const navigate = useNavigate();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await api.get("/properties/active");
//         if (res.data.success) {
//           setProperties(res.data.data.slice(0, 4));
//         } else {
//           setProperties(fallbackProperties);
//         }
//       } catch (err) {
//         showErrorToast("Failed to load properties" + err);
//         setProperties(fallbackProperties);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProperties();
//   }, []);

//   useEffect(() => {
//     const container = scrollRef.current;
//     const interval = setInterval(() => {
//       if (container) {
//         container.scrollLeft += 1;
//         if (
//           container.scrollLeft + container.clientWidth >=
//           container.scrollWidth
//         ) {
//           container.scrollLeft = 0;
//         }
//       }
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
//       <div className="text-center px-4 mb-16">
//         <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
//           {sectionText.title}
//         </h2>
//         <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
//           {sectionText.description}
//         </p>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
//         </div>
//       ) : (
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto px-4 md:px-10 pb-4 scrollbar-hide scroll-smooth"
//         >
//           {properties.map((p) => (
//             <div
//               key={p._id}
//               className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl  transition-all duration-300 flex-shrink-0"
//             >
//               <div className="overflow-hidden rounded-t-2xl">
//                 <img
//                   src={p.mainImage}
//                   alt={p.name}
//                   className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6 gap-4 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
//                     {p.name}
//                   </h3>
//                   <div className="flex flex-row justify-between">
//                     <p className="text-sm text-gray-500 mt-1 flex items-center">
//                     <MapPin size={16} className="mr-1 text-amber-600" />
//                     {p.location}
//                   </p>
//                   <p className="text-sm text-gray-400 mt-1 flex items-center">
//                     <Building size={16} className="mr-1 text-amber-600" />
//                     {p.type || "Apartment"}
//                   </p>
//                   </div>
//                 </div>
//                 <div className="">
//                   <p className="text-gray-800 text-sm">
//                     Starting at{" "}
//                     <span className="text-green-600 font-bold">{p.price}</span>
//                   </p>
//                   <button
//                     onClick={() => navigate(`/properties/${p._id}`)}
//                     className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
//                   >
//                     View Details <ArrowRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="mt-14 flex justify-center">
//         <button
//           onClick={() => navigate("/properties")}
//           className="px-8 py-3 rounded-full bg-white text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white transition-all  duration-300 "
//         >
//           View All Properties
//         </button>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { MapPin, ArrowRight, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import api from "../../services/api";
import { showErrorToast } from "../../config/toastConfig";

const fallbackProperties = [
  {
    _id: "1",
    name: "Kingfisher Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "$354,000",
    mainImage:
      "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    _id: "2",
    name: "Kingfisher Islands",
    location: "Dubailand, Dubai, UAE",
    price: "$678,000",
    mainImage:
      "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
  },
  {
    _id: "3",
    name: "Violet",
    location: "Kingfisher Hills 2, Dubai, UAE",
    price: "$534,000",
    mainImage:
      "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
  },
  {
    _id: "4",
    name: "Kingfisher Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "$790,000",
    mainImage:
      "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
  },
];

const sectionText = {
  title: "Explore Our Iconic Properties",
  description:
    "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
};

export default function IconicProperties() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/properties/active");
        if (res.data.success) {
          setProperties(res.data.data.slice(0, 4));
        } else {
          setProperties(fallbackProperties);
        }
      } catch (err) {
        showErrorToast("Failed to load properties: " + err);
        setProperties(fallbackProperties);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.div
        className="text-center px-4 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
          {sectionText.title}
        </h2>
        <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
          {sectionText.description}
        </p>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="relative max-w-7xl mx-auto px-4 md:px-10">
          {/* Custom Prev Button */}
          <button
            className="absolute z-10 top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
            onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
          >
            <ArrowRight className="rotate-180" size={18} />
          </button>

          {/* Custom Next Button */}
          <button
            className="absolute z-10 top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
            onClick={() => document.querySelector(".swiper").swiper.slideNext()}
          >
            <ArrowRight size={18} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            grabCursor
          >
            {properties.map((p, index) => (
              <SwiperSlide key={p._id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl  transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={p.mainImage}
                    alt={p.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6 flex flex-col gap-4 justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {p.name}
                      </h3>
                      <div className="flex flex-row justify-between">
                        <p className="text-sm text-gray-500 mt-1 flex items-center">
                          <MapPin size={16} className="mr-1 text-amber-600" />
                          {p.location}
                        </p>
                        <p className="text-sm text-gray-400 mt-1 flex items-center">
                          <Building size={16} className="mr-1 text-amber-600" />
                          {p.type || "Apartment"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm">
                        Starting at{" "}
                        <span className="text-green-600 font-bold">
                          {p.price}
                        </span>
                      </p>
                      <button
                        onClick={() => navigate(`/properties/${p._id}`)}
                        className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="mt-14 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/properties")}
          className="px-8 py-3 rounded-full bg-white text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          View All Properties
        </motion.button>
      </div>
    </section>
  );
}
