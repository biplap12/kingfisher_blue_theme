// import { useContext, useEffect, useState } from "react";
// import ToggleSidebar from "./toggleSidebar.jsx";
// import { Link } from "react-router-dom";
// import { BiSolidMessageAltDetail } from "react-icons/bi";
// import { MenuContext } from "../../state/MenuContext.jsx";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

//   const { menuColor } = useContext(MenuContext);

//   const toggleSidebar = () => setIsOpen((prev) => !prev);
//   const closeSidebar = () => setIsOpen(false);

//   // Lock body scroll when sidebar is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   // Scroll direction visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrollingDown(window.scrollY > 700);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 800);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); 
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 dark ${
//         isScrollingDown ? "w-fit" : "w-full"
//       } z-50 transition duration-300`}
//     >
//       <div className="flex items-center justify-between px-6 py-5 transition-all duration-300">
//         {/* Hamburger menu */}
//         <div className="flex items-center gap-8">
//           <div
//             className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
//             onClick={toggleSidebar}
//           >
//             <span
//               className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "rotate-45 top-5 bg-white" : "top-2"
//               } ${
//                 isScrollingDown ? "bg-black" : "bg-white"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out ${
//                 isOpen ? "opacity-0" : "top-5"
//               } ${
//                 isScrollingDown ? "bg-black" : "bg-white"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "-rotate-45 top-5 bg-white" : "top-8"
//               } ${
//                 isScrollingDown ? "bg-black" : "bg-white"
//               }`}
//             />
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//           <Link
//             to="/"
//             className={`flex items-center transition-opacity duration-300 ${
//               isScrollingDown ? "hidden pointer-events-none" : "opacity-100"
//             }`}
//           >
//             <img
//               src="/logo/logo1.png"
//               alt="logo"
//               className="h-8 md:h-12 object-contain"
//             />
//           </Link>
//         </div>

//         {/* Contact & Enquiry */}
//         <div
//           className={`flex items-center gap-4 transition-opacity duration-300 ${
//             isScrollingDown ? "hidden pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <span className="font-medium text-white hidden md:block">
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

//       {isOpen && <ToggleSidebar onClose={closeSidebar} />}
//     </div>
//   );
// }



import { useContext, useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MenuContext } from "../../state/MenuContext.jsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideLogoEnquiry, setHideLogoEnquiry] = useState(false);
  const [hamburgerScroll, setHamburgerScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const { menuColor } = useContext(MenuContext);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Scroll handling for logo/enquiry and hamburger separately
  useEffect(() => {
    const handleScroll = () => {
      setHideLogoEnquiry(window.scrollY > 100);
      setHamburgerScroll(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                isOpen ? "rotate-45 top-5 bg-white" : "top-2"
              } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-5"
              } ${hamburgerScroll ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-5 bg-white" : "top-8"
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

      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </div>
  );
}
