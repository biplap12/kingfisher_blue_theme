
import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  };

   useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);
  return (
    <div className="sticky top-0 left-0 w-full z-60 bg-transparent shadow-xs">
      <div className="flex items-center justify-between px-6 py-5">
        {/* Left: Hamburger + Language */}
        <div className="flex items-center gap-8">
          {/* Hamburger */}
          <div
            className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
            onClick={toggleSidebar}
          >
            {/* Top Line */}
            <span
              className={`absolute h-0.5 w-12 bg-[#F5BC6D] transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-5" : "top-2"
              }`}
            />
            {/* Middle Line */}
            <span
              className={`absolute h-0.5 w-8 bg-[#F5BC6D] transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-5"
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`absolute h-0.5 w-12 bg-[#F5BC6D] transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-5" : "top-8"
              }`}
            />
          </div>

          {/* Dynamic Language Switcher */}
          <div
            onClick={toggleLanguage}
            className={`flex items-center gap-2 font-semibold cursor-pointer ${
              isOpen ? "text-black" : "text-white"
            }`}
          >
            <span>{language}</span>
            <span>/</span>
            <span>{language === "EN" ? "AR" : "EN"}</span>
          </div>
        </div>

        {/* Center: Logo */}
        <Link to={'/'} className="flex justify-center items-center ml-35 flex-1">
          <img src="/logo/logo1.png" alt="logo" className="h-12 object-contain" />
        </Link>

        {/* Right: Contact + Button */}
        <div className="flex items-center gap-5">
          <span className={`font-semibold ${isOpen ? "text-black" : "text-white"}`}>
            +1 (234) 567-8901
          </span>
          <Link to={'/enquiry'}
            className={`px-4 py-2 rounded transition cursor-pointer ${
              isOpen
                ? "bg-[#232266] text-white hover:black"
                : "bg-[#F5BC6D] text-[#232266] hover:black"
            }`}
          >
            Enquiry Now
          </Link>
        </div>
      </div>

      {/* Sidebar Modal */}
      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </div>
  );
}
