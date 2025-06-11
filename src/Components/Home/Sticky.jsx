import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  "Indoor",
  "Gallery",
  "Apartments",
  "Amenities",
  "Location",
  "Payment Plan",
  "Floor Plans",
  "Partners"
];

const Sticky = () => {
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id.replace(/\s+/g, '-').toLowerCase()}`,
        offsetY: 60,
      },
      ease: "power2.inOut",
    });
  };



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );

    if (navRef.current) observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  
  return (
 <>
  <div ref={navRef}></div>

  <div className="sticky top-0 z-[999999]  bg-white  pointer-events-auto">
    <div className="text-center text-sm uppercase tracking-widest paragraph-font p-7 ">
      {navItems.map((item, idx) => (
        <span
          key={idx}
          onClick={() => handleClick(item.toLowerCase())}
          className="text-[#1e2c3a] hover:underline cursor-pointer mx-2 "
        >
          {item}
        </span>
      ))}
    </div>
  </div>

 {isSticky && (
  <button
    className="fixed -top-8 left-1/2 -translate-x-1/2 z-[999999] text-5xl hover:text-yellow-500 transition animate-bounce"
  >
    🢕
  </button>
) }

</>


  );
};

export default Sticky;
