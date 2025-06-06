import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at RealtyPro",
    image:
      "https://media.istockphoto.com/id/501834387/photo/an-african-american-female-real-estate-agent-standing-outside.jpg?s=612x612&w=0&k=20&c=eEjbkvDL_j7YK8bgUi7Mx3SrJz_8bGw5EGPGqpiVmN4=",
    text: "Buying my home through this platform was seamless and professional. Highly recommend!",
  },
  {
    name: "Jane Smith",
    title: "Investor",
    image:
      "https://i0.wp.com/racinecountyeye.com/wp-content/uploads/2020/11/OneAffirmationLLC-seotool-62821-FourThingsYou-Image1.jpg",
    text: "Transparent process process and incredible support throughout my purchase and incredible support throughout my purchase journey process and incredible support throughout my purchase.",
  },
  {
    name: "Ali Khan",
    title: "Property Buyer",
    image:
      "https://media.istockphoto.com/id/155360688/photo/proud-wife-in-front-of-her-family-house.jpg?s=612x612&w=0&k=20&c=67RIpfWSXsWsLpHbfqJyYz4Zhet8rIcYtADtv-ODIxU=",
    text: "Excellent listings and very responsive customer service. Five stars!",
  },
  {
    name: "Sarah Lee",
    title: "First-Time Buyer",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    text: "They helped me find the perfect apartment in no time. Loved the experience!",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <section className="bg-black overflow-hidden py-20">
      <div className="text-center mb-10">
        <h2 className="text-center text-3xl md:text-4xl text-yellow-500 font-light tracking-wide mb-6 uppercase">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-14">
          Real stories from real people
        </p>
      </div>

      <motion.div
        ref={carouselRef}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 px-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 h-screen w-[40vw] rounded-xl border border-yellow-900 bg-yellow-50/10 p-6 flex flex-col justify-center items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-44 h-44 rounded-full object-cover mb-4 border-4 border-gray-200"
              />
              <p className="text-xl text-zinc-300 mb-4">"{item.text}"</p>
              <h4 className="font-semibold text-xl text-yellow-500">{item.name}</h4>
              <p className="text-zinc-500">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialCarousel;
