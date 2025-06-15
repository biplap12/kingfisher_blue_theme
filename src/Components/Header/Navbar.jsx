

// import { useEffect, useState } from "react";
// import ToggleSidebar from "./toggleSidebar.jsx";
// import { Link } from "react-router-dom";
// import { BiSolidMessageAltDetail } from "react-icons/bi";
// import { useBannerHeight } from "../../Context/BannerHeightContext.jsx";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hideLogoEnquiry, setHideLogoEnquiry] = useState(false);
//   const [hamburgerScroll, setHamburgerScroll] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
//   const [menuColor, setMenuColor] = useState("light");

//   const { bannerHeight } = useBannerHeight();

//   const toggleSidebar = () => setIsOpen((prev) => !prev);
//   const closeSidebar = () => setIsOpen(false);

//   // Disable body scroll when sidebar is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   // Scroll listener for navbar behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       // Show/hide logo and enquiry button on scroll
//       setHideLogoEnquiry(scrollY > 100);

//       // Hamburger scroll state (changes its color)
//       setHamburgerScroll(scrollY > bannerHeight - 80);

//       // Menu color state for navbar background change
//       if (scrollY > bannerHeight - 80) {
//         setMenuColor("dark");
//       } else {
//         setMenuColor("light");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run once on mount

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [bannerHeight]);

//   // Screen resize listener for mobile state
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 800);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Run once on mount

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 z-50 transition duration-300 ${
//         hamburgerScroll ? "w-fit" : "w-full"
//       } ${menuColor === "dark" ? "bg-white text-black" : "bg-transparent text-white"}`}
//     >
//       <div className="flex items-center justify-between px-6 py-5 transition-all duration-300">
//         {/* Hamburger */}
//         <div className="flex items-center gap-8">
//           <div
//             className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
//             onClick={toggleSidebar}
//           >
//             <span
//               className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "rotate-45 top-5 bg-white" : "top-2"
//               } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
//             />
//             <span
//               className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out ${
//                 isOpen ? "opacity-0" : "top-5"
//               } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
//             />
//             <span
//               className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "-rotate-45 top-5 bg-white" : "top-8"
//               } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
//             />
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//           <Link
//             to="/"
//             className={`flex items-center transition-opacity duration-300 ${
//               hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
//             }`}
//           >
//             <img
//               src="/logo/logo1.png"
//               alt="logo"
//               className="h-8 md:h-12 object-contain"
//             />
//           </Link>
//         </div>

//         {/* Enquiry / Contact */}
//         <div
//           className={`flex items-center gap-4 transition-opacity duration-300 ${
//             hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <span className="font-medium hidden md:block">
//             +1 (234) 567-8901
//           </span>

//           <Link
//             to="/enquiry"
//             className={`transition cursor-pointer ${
//               isMobile
//                 ? "p-2 rounded-full"
//                 : "px-4 py-2 rounded font-semibold bg-white text-[#232266] hover:bg-[#e0a647]"
//             }`}
//           >
//             {isMobile ? (
//               <BiSolidMessageAltDetail color="white" size={30} />
//             ) : (
//               "Enquiry Now?"
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Sidebar panel */}
//       {isOpen && <ToggleSidebar onClose={closeSidebar} />}
//     </div>
//   );
// }




import { useContext, useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MenuContext } from "../../state/MenuContext.jsx";
import { useBannerHeight } from "../../Context/BannerHeightContext.jsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideLogoEnquiry, setHideLogoEnquiry] = useState(false);
  const [hamburgerScroll, setHamburgerScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuColor, setMenuColor] = useState("light");

  const { bannerHeight } = useBannerHeight();

  // Toggle sidebar open/close
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHideLogoEnquiry(scrollY > 100);
      setHamburgerScroll(scrollY > bannerHeight - 80);

      if (scrollY > bannerHeight - 80) {
        setMenuColor("dark");
      } else {
        setMenuColor("light");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerHeight]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 dark ${
        hamburgerScroll ? "w-fit" : "w-full"
      } z-50 transition duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-5 transition-all duration-300">
        {/* Hamburger menu */}
        <div className="flex items-center gap-8">
          <div
            className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
            onClick={toggleSidebar}
          >
            <span
              className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-5 bg-transparent" : "top-2"
              } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-5"
              } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-5 bg-transparent" : "top-8"
              } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
            />
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link
            to="/"
            className={`flex items-center transition-opacity duration-300 ${
              hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
            }`}
          >
            <img
              src="/logo/logo1.png"
              alt="logo"
              className="h-8 md:h-12 object-contain"
            />
          </Link>
        </div>

        {/* Contact & Enquiry */}
        <div
          className={`flex items-center gap-4 transition-opacity duration-300 ${
            hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="font-medium text-white hidden md:block">
            +1 (234) 567-8901
          </span>

          <Link
            to="/enquiry"
            className={`transition cursor-pointer ${
              isMobile
                ? "p-2 rounded-full"
                : "px-4 py-2 rounded font-semibold bg-white text-[#232266] hover:bg-[#e0a647]"
            }`}
          >
            {isMobile ? (
              <BiSolidMessageAltDetail color="white" size={30} />
            ) : (
              "Enquiry Now?"
            )}
          </Link>
        </div>
      </div>

      {/* Sidebar panel */}
      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </div>
  );
}
