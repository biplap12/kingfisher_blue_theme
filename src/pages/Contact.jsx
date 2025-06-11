import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "framer-motion";
import { MenuContext } from "../state/ContextMenu.jsx";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  const { setMenuColor } = useContext(MenuContext);

  const isInView = useInView(contactRef, { once: false });

  // Animate elements on scroll
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

  // Update menu color when in view
  useEffect(() => {
    if (isInView) {
      setMenuColor("dark");
    }
  }, [isInView, setMenuColor]);
  

  return (
    <div ref={contactRef} className="relative h-auto -mt-25">
      {/* Header section with background image */}
      <div
        ref={headerRef}
        className="relative h-[50vh] mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm z-20" />
        <div className="relative z-30 text-center max-w-2xl mx-auto px-6 pt-32 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-font">Contact</h1>
          <Breadcrumbs />
          <p className="text-lg text-[#F5BC6D] mt-4">
            The Hottest Real Estate Marketing, Website, and Technology Insights.
          </p>
        </div>
      </div>

      {/* Back Link */}
      <div className="px-6 md:px-24 mt-6 md:mt-10">
        <Link to='/' className="flex items-center text-gray-700"><ArrowLeft size={15} className="mr-1" /> Back</Link>
      </div>

      {/* Contact Form Section */}
      <div
        ref={containerRef}
        className="gradient-bg-blue text-[#F5BC6D] -mt-10 md:-mt-25 flex items-center justify-center px-4 md:px-6 py-16 md:py-20 overflow-hidden lightSection"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10">
          {/* Image */}
          <div
            ref={imageRef}
            className="bg-cover bg-center h-64 md:h-[500px] rounded-lg shadow-lg shadow-[#c6a664]/30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?w=600&auto=format&fit=crop&q=60')",
            }}
          ></div>

          {/* Form */}
          <div className="flex flex-col px-2 md:px-0">
            <h2
              ref={titleRef}
              className="text-3xl md:text-5xl mb-2 tracking-widest uppercase"
            >
              Enquire
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Enquire about props, antiques, and anything else.
            </p>

            <form ref={formRef} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-1/2 bg-transparent border-b border-[#F5BC6D] outline-none placeholder-[#c6a664]/60 text-yellow-600 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-1/2 bg-transparent border-b border-[#c6a664] outline-none placeholder-[#c6a664]/60 text-yellow-600 py-2"
                />
              </div>
              <textarea
                placeholder="How Can We Help?"
                rows="4"
                className="w-full bg-transparent border-b border-[#c6a664] outline-none placeholder-[#c6a664]/60 text-yellow-600 py-2"
              ></textarea>
              <button
                type="submit"
                className="text-[#c6a664] underline underline-offset-4 hover:text-black hover:bg-[#c6a664] hover:no-underline px-4 py-2 rounded transition-all duration-300 w-fit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



