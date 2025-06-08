import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isDarkSection, setIsDarkSection] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));

  // Lock body scroll on sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Contrast effect using scroll + intersection observer
  useEffect(() => {
    const target = document.querySelector("#dark-section");

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const textColor = isOpen
    ? "text-black"
    : isDarkSection
    ? "text-white"
    : "text-black";

  const logoSrc =
    isDarkSection && !isOpen ? "/logo/logo-light.png" : "/logo/logo1.png";

  return (
    <div className="fixed top-0 left-0 w-full z-60 transition duration-300">
      <div className="flex items-center justify-between px-6 py-5">
        {/* Left: Hamburger + Language */}
        <div className="flex items-center gap-8">
          {/* Hamburger */}
          <div
            className="w-12 h-10 relative flex flex-col justify-center cursor-pointer z-[60]"
            onClick={toggleSidebar}
          >
            <span
              className={`absolute h-0.5 w-12 bg-[#F5BC6D] transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-5" : "top-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-8 bg-[#F5BC6D] transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-12 bg-[#F5BC6D] transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-5" : "top-8"
              }`}
            />
          </div>

          {/* Language */}
          <div
            onClick={toggleLanguage}
            className={`font-semibold cursor-pointer ${textColor}`}
          >
            {language} / {language === "EN" ? "AR" : "EN"}
          </div>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="flex justify-center items-center ml-35 flex-1">
          <img
            src={logoSrc}
            alt="logo"
            className="h-12 object-contain transition"
          />
        </Link>

        {/* Right: Contact & Enquiry */}
        <div className="flex items-center gap-5">
          <span className={`font-semibold ${textColor}`}>
            +1 (234) 567-8901
          </span>
          <Link
            to="/enquiry"
            className={`px-4 py-2 rounded transition cursor-pointer ${
              isOpen
                ? "bg-[#232266] text-white"
                : "bg-[#F5BC6D] text-[#232266] hover:bg-[#e0a647]"
            }`}
          >
            Enquiry Now
          </Link>
        </div>
      </div>

      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </div>
  );
}
