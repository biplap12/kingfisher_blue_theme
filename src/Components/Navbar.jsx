import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './loginMOdel'; // Make sure this is the correct path

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
    <div className="sticky top-0 z-50 w-full py-6 px-8 text-white backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Left Placeholder */}
        <div className="w-[180px]"></div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logo/logo1.png" alt="Logo" className="h-10 object-contain" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 w-[180px] justify-end">
          {/* Language Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-1 uppercase text-sm tracking-wider">
              EN
              {isHovered ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-32 z-10"
                >
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                      🇺🇸 <span>EN</span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                      🇮🇳 <span>HI</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enquiry Button */}
          <button
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-gray-100 transition whitespace-nowrap"
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
