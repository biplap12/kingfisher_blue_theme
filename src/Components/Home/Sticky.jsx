// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin);

// const navItems = [
//   "Our Story",
//   "Services",
//   "Why Us?",
//   "Properties",
//   "Gallery",
//   "Location",
//   "Payment Plan",
//   "Floor Plan",
//   "Partners"
// ];

// const Sticky = () => {
//   const navRef = useRef(null);
//   const [isClicked, setIsClicked] = useState(false)
//   // const [isSticky, setIsSticky] = useState(false);
//   // str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

//   const handleClick = (id) => {
//     setIsClicked(id)
//     gsap.to(window, {
//       duration: 1,
//       scrollTo: {
//         y: `#${id.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`,
//         offsetY: 60,
//       },
//       ease: "power2.inOut",
//     });
//     console.log(id,"clicked")
//   };
 
//   return (
//  <>
//   <div ref={navRef}></div>

//   <div className="sticky top-0 z-[999999]  bg-white  pointer-events-auto">
//     <div className="text-center text-sm uppercase tracking-widest paragraph-font p-7 flex flex-wrap justify-center ">
//       {navItems.map((item, idx) => (
//         <span
//           key={idx}
//           onClick={() => handleClick(item.toLowerCase())}
//           className={item.toLowerCase() === isClicked ? `text-[#cf8319c1] underline cursor-pointer mx-2` : `text-[#1e2c3a] hover:underline cursor-pointer mx-2`}>
//           {item}
//         </span>
//       ))}
//     </div>
//   </div>



// </>


//   );
// };

// export default Sticky;



import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const navItems = [
  "Our Story",
  "Services",
  "Why Us?",
  "Properties",
  "Gallery",
  "Location",
  "Payment Plan",
  "Floor Plan",
  "Partners"
];

const Sticky = () => {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const toId = (str) =>
    str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

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
      <div ref={navRef}></div>

      <div className="sticky top-0 z-[999999] bg-white pointer-events-auto">
        <div className="text-center text-sm uppercase tracking-widest paragraph-font p-7 flex flex-wrap justify-center">
          {navItems.map((item, idx) => (
            <span
              key={idx}
              onClick={() => handleClick(item)}
              className={`mx-2 cursor-pointer ${
                activeSection === item
                  ? "text-[#cf8319c1] underline"
                  : "text-[#1e2c3a] hover:underline"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sticky;
