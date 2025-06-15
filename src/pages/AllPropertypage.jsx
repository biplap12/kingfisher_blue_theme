// import React, { useContext, useEffect, useRef } from "react";
// import PropertyCard from "../Components/Property-card/PropertyCard";
// import { MenuContext } from "../state/MenuContext";
// import { useInView } from "framer-motion";
// import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
// import { useBannerHeight } from "../Context/BannerHeightContext";

// const AllPropertypage = () => {
//   const divRef = useRef(null);
//   const { setMenuColor } = useContext(MenuContext);
//   const isVisible = useInView(divRef, { once: false });

//   const bannerRef = useRef(null);
//   const { setBannerHeight } = useBannerHeight();
//   useEffect(() => {
//     if (bannerRef.current) {
//       setBannerHeight(bannerRef.current.offsetHeight);
//     }
//   }, []);

//   useEffect(() => {
//     setMenuColor("dark");
//   }, [isVisible]);

//   return (
//     <>
//       <section
//         className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
//         style={{
//           backgroundImage: 'url("/property/property.jpg")',
//           fontFamily: `'Wellsbrook Initials SG Regular'`,
//           height: "75vh",
//           padding: "0 50px",
//         }}
//         ref={bannerRef}
//       >
//         {/* Black overlay at 80% */}
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Centered Text */}
//         <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
//           <p className="text-6xl font-bold heading-font tracking-widest uppercase leading-20 heading-font">
//             ALL Properties
//           </p>
//           <Breadcrumbs />
//         </div>
//       </section>

//       {/* Property cards */}
//       <PropertyCard />
//     </>
//   );
// };

// export default AllPropertypage;



import React, { useContext, useEffect, useRef } from "react";
import PropertyCard from "../Components/Property-card/PropertyCard";
import { MenuContext } from "../state/MenuContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { useBannerHeight } from "../Context/BannerHeightContext";

const AllPropertypage = () => {
  const bannerRef = useRef(null);
  const { setMenuColor } = useContext(MenuContext);
  const { setBannerHeight } = useBannerHeight();

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bannerRef.current && scrollY > bannerRef.current.offsetHeight - 80) {
        setMenuColor("dark");
      } else {
        setMenuColor("light");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuColor]);

  return (
    <>
      <section
        className="relative w-full mx-auto bg-cover bg-center text-white -mt-25 darkSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          fontFamily: `'Wellsbrook Initials SG Regular'`,
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p className="text-6xl font-bold heading-font tracking-widest uppercase leading-20 heading-font">
            ALL Properties
          </p>
          <Breadcrumbs />
        </div>
      </section>

      <PropertyCard />
    </>
  );
};

export default AllPropertypage;
