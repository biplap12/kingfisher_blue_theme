// import { useEffect, useState } from "react";
// import ToggleSidebar from "./toggleSidebar.jsx";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState("EN");
//   const [isDarkSection, setIsDarkSection] = useState(false);

//   const toggleSidebar = () => setIsOpen((prev) => !prev);
//   const closeSidebar = () => setIsOpen(false);
//   const toggleLanguage = () =>
//     setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));

//   // Lock body scroll on sidebar open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [isOpen]);

//   // Contrast effect using scroll + intersection observer
//   useEffect(() => {
//     const target = document.querySelector("#dark-section");

//     if (!target) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsDarkSection(entry.isIntersecting);
//       },
//       {
//         root: null,
//         threshold: 0.3,
//       }
//     );

//     observer.observe(target);
//     return () => observer.disconnect();
//   }, []);

//   const textColor = isOpen
//     ? "text-black"
//     : isDarkSection
//     ? "text-white"
//     : "text-white";

//   const logoSrc =
//     isDarkSection && !isOpen ? "/logo/logo-light.png" : "/logo/logo-white.png";

//   return (
//     <div className="fixed top-0 left-0 w-full z-60 transition duration-300">
//       <div className="flex items-center justify-between px-6 py-5">
//         {/* Left: Hamburger + Language */}
//         <div className="flex items-center gap-8">
//           {/* Hamburger */}
//           <div
//             className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
//             onClick={toggleSidebar}
//           >
//             <span
//               className={`absolute h-0.5 w-12 bg-white transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "rotate-45 top-5" : "top-2"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${
//                 isOpen ? "opacity-0" : "top-5"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-12 bg-white transform transition-all duration-300 ease-in-out ${
//                 isOpen ? "-rotate-45 top-5" : "top-8"
//               }`}
//             />
//           </div>

//           {/* Language */}
//           {/* <div
//             onClick={toggleLanguage}
//             className={`font-semibold cursor-pointer ${textColor}`}
//           >
//             {language} / {language === "EN" ? "AR" : "EN"}
//           </div> */}
//         </div>

//         {/* Center: Logo */}
//         <Link to="/" className="flex justify-center items-center ml-35 flex-1">
//           <img
//             src={logoSrc}
//             alt="logo"
//             className="h-12 object-contain transition"
//           />
//         </Link>

//         {/* Right: Contact & Enquiry */}
//         <div className="flex items-center gap-5">
//           <span className={`font-semibold ${textColor}`}>
//             +1 (234) 567-8901
//           </span>
//           <Link
//             to="/enquiry"
//             className={`px-4 py-2 rounded transition cursor-pointer ${
//               isOpen
//                 ? "bg-[#232266] text-white"
//                 : "bg-white text-[#232266] hover:bg-[#e0a647]"
//             }`}
//           >
//             Enquiry Now
//           </Link>
//         </div>
//       </div>

//       {isOpen && <ToggleSidebar onClose={closeSidebar} />}
//     </div>
//   );
// }










import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useNavState } from "../../state/navstate.jsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const { isDarkMode, toggleDarkMode } = useNavState();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

useEffect(() => {
  const hero = document.getElementById("hero");
  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const heroIsVisible = entry.isIntersecting && entry.intersectionRatio > 0.5;

      // If hero is visible and mode is dark, switch to light
      if (heroIsVisible && isDarkMode) {
        toggleDarkMode();
      }

      // If hero is NOT visible and mode is light, switch to dark
      if (!heroIsVisible && !isDarkMode) {
        toggleDarkMode();
      }
    },
    {
      threshold: [1], // Trigger when more than 50% is in view
    }
  );

  observer.observe(hero);
  return () => observer.disconnect();
}, [isDarkMode, toggleDarkMode]);


  // Section observer for menu color
  // useEffect(() => {
  //   const sections = document.querySelectorAll(".darkSection, .lightSection");
  //   if (sections.length === 0) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const fullyVisibleEntry = entries.find(
  //         (entry) => entry.isIntersecting && entry.intersectionRatio === 1
  //       );

  //       if (!fullyVisibleEntry) return;

  //       const classList = fullyVisibleEntry.target.classList;

  //       if (classList.contains("darkSection") && !isDarkMode) {
  //         toggleDarkMode();
  //       } else if (classList.contains("lightSection") && isDarkMode) {
  //         toggleDarkMode();
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   sections.forEach((section) => observer.observe(section));
  //   return () => observer.disconnect();
  // }, [isDarkMode, toggleDarkMode]);

  // Scroll direction visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 100);
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
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 ${
        isScrollingDown ? "w-fit" : "w-full"
      } z-[60] transition duration-300`}
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
                isOpen ? "rotate-45 top-5" : "top-2"
              } ${isDarkMode ? "bg-black" : " bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-5"
              } ${isDarkMode ? "bg-black" : " bg-white"}`}
            />
            <span
              className={`absolute h-0.5 w-12 transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-5" : "top-8"
              } ${isDarkMode ? "bg-black" : " bg-white"}`}
            />
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link
            to="/"
            className={`flex items-center transition-opacity duration-300 ${
              isScrollingDown ? "hidden pointer-events-none" : "opacity-100"
            }`}
          >
            <img
              src="/logo/logo-white.png"
              alt="logo"
              className="h-8 md:h-12 object-contain"
            />
          </Link>
        </div>

        {/* Contact & Enquiry */}
        <div
          className={`flex items-center gap-4 transition-opacity duration-300 ${
            isScrollingDown ? "hidden pointer-events-none" : "opacity-100"
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
