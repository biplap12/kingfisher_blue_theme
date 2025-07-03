import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const navItems = [
  "our story",
  "Services",
  "Why Us?",
  "Properties",
  "Gallery",
  "Location",
  "Payment Plan",
  "Floor Plan",
  "Partners",
];

const Sticky = () => {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("our story");

  const toId = (str) =>
    str
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleClick = (item) => {
    const id = toId(item);
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id}`,
        offsetY: 60,
      },
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    navItems.forEach((item) => {
      const id = toId(item);
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(item),
        onEnterBack: () => setActiveSection(item),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={navRef}> </div>

      <div className="sticky top-0 z-[9999] bg-white border-b border-gray-200">
        <div className="flex items-center overflow-x-auto mx-24 lg:mx-10 md:mx-20 scrollbar-hide scrollbar-hidden px-4 sm:px-6 py-7 space-x-4 sm:justify-center">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className={`whitespace-nowrap text-xs sm:text-sm md:text-md tracking-widest uppercase font-medium transition-colors duration-200 ${
                activeSection === item
                  ? "text-[#cf8319c1] underline underline-offset-4"
                  : "text-[#1e2c3a] hover:text-[#cf8319c1]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sticky;
