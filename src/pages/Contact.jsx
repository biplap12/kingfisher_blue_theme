import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="gradient-bg-blue text-[#F5BC6D] -mt-25    min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 w-full max-w-6xl mt-10 gap-10">
        {/* Image */}
        <div
          ref={imageRef}
          className="bg-cover bg-center h-[500px] rounded-lg shadow-lg shadow-[#c6a664]/30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?w=600&auto=format&fit=crop&q=60')",
          }}
        ></div>

        {/* Form */}
        <div className="flex flex-col ">
          <h1
            ref={titleRef}
            className="text-5xl mb-2 tracking-widest uppercase "
          >
            Enquire
          </h1>
          <p className="mb-6 ">
            Enquire about props, antiques and anything else.
          </p>

          <form ref={formRef} className="space-y-6">
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 bg-transparent border-b border-[#F5BC6D] outline-none placeholder-[#c6a664]/60 text-white py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 bg-transparent border-b border-[#c6a664] outline-none placeholder-[#c6a664]/60 text-white py-2"
              />
            </div>
            <textarea
              placeholder="How Can We Help?"
              rows="4"
              className="w-full bg-transparent border-b border-[#c6a664] outline-none placeholder-[#c6a664]/60 text-white py-2"
            ></textarea>
            <button
              type="submit"
              className="text-[#c6a664]  underline underline-offset-4 hover:text-black hover:bg-[#c6a664] hover:no-underline px-4 py-2 rounded transition-all duration-300 w-fit"
            >
              SEND
            </button>
          </form>

          {/* <div className="mt-10 text-sm flex justify-end gap-3 text-[#c6a664]/80 leading-relaxed">
            <div className="mt-3">
             <p>kingfisherestate.co.ae</p>
             <p> Monday - Saturday: 10:00 - 18:00</p> 
              <p>Sunday: 11:00 - 17:00</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;





// import React from 'react';
// import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const Contact= () => {
//   return (
//     <div className="min-h-screen bg-[#e6f1f7] flex items-center justify-center px-6 py-10 relative overflow-hidden  ">
//       {/* Floating Circles */}
//       <div className="absolute w-24 h-24 bg-[#b0d9ee] rounded-full top-10 left-10 shadow-lg opacity-50"></div>
//       <div className="absolute w-12 h-12 bg-[#9ed2f3] rounded-full top-5 right-1/2 shadow-md opacity-40"></div>
//       <div className="absolute w-8 h-8 bg-[#b0d9ee] rounded-full bottom-16 left-1/3 shadow-sm opacity-40"></div>
//       <div className="absolute w-96 h-96 bg-[#c2e7f4] rounded-full bottom-[-80px] right-[-100px] opacity-50"></div>

//       <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 overflow-hidden">
//         {/* Left: Contact Form */}
//         <div className="p-10">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
//           <form className="space-y-4">
//             <div className="flex gap-4">
//               <input type="text" placeholder="Fast name" className="w-1/2 border-b border-gray-400 bg-transparent focus:outline-none py-2 placeholder-gray-500" />
//               <input type="text" placeholder="Last name" className="w-1/2 border-b border-gray-400 bg-transparent focus:outline-none py-2 placeholder-gray-500" />
//             </div>
//             <input type="email" placeholder="Email Address" className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 placeholder-gray-500" />
//             <input type="tel" placeholder="Phone number" className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 placeholder-gray-500" />
//             <textarea placeholder="Comment or message" rows="4" className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 placeholder-gray-500"></textarea>
//             <button type="submit" className="bg-gradient-to-r from-[#6cc2e8] to-[#4aa6d1] text-white px-8 py-2 rounded-full shadow-md hover:opacity-90">Submit</button>
//           </form>
//         </div>

//         {/* Right: Contact Info */}
//         <div className="bg-[#e2f8f7] flex flex-col items-center justify-center p-10 text-gray-700 relative">
//           <div className="text-center">
//             <div className="w-20 h-2 bg-[#8ac0dd] rounded-full mx-auto mb-4"></div>
//             <h3 className="text-2xl font-bold mb-6">Emmit</h3>

//             <div className="flex flex-col items-start gap-4 text-sm text-left">
//               <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#4aa6d1]" /> 2715 Ash Dr. San Jose, South Dakota 83475</p>
//               <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#4aa6d1]" /> (207) 555-0119</p>
//               <p className="flex items-center gap-2"><FaEnvelope className="text-[#4aa6d1]" /> kenzi.lawson@example.com</p>
//             </div>

//             <div className="flex justify-center gap-6 mt-8 text-[#4aa6d1] text-lg">
//               <FaInstagram className="hover:text-[#2d6e85] cursor-pointer" />
//               <FaWhatsapp className="hover:text-[#2d6e85] cursor-pointer" />
//               <FaFacebookF className="hover:text-[#2d6e85] cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
