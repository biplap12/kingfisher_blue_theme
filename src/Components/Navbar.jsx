import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "./loginMOdel"; // Make sure this is the correct path

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModalBox = () => {
    setIsOpen(true);
  };

  const closeModalBox = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full mx-auto py-6 px-24 text-white backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Left Placeholder */}

        {/* Center Logo */}
        <div className="">
          <img
            src="/logo/logo1.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 w-[180px] justify-end">
          {/* Enquiry Button */}
          <button
            className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-gray-100 transition whitespace-nowrap"
            onClick={openModalBox}
          >
            ENQUIRY
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      {isOpen && <EnquiryModal onClose={closeModalBox} />}
    </div>
  );
};

export default Navbar;
