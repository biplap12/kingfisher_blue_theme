import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear= new Date().getFullYear();
  return (
    <footer className="bg-[#111827] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src="/logo/logo1.png"
            alt="Company Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* Contact Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold border-b border-white pb-2 mb-4">
            DETAILS
          </h2>
          <p className="flex items-start gap-3 mb-3 text-sm leading-relaxed">
            <MapPin className="mt-1 w-5 h-5 shrink-0" />
            SUITE 203, PARK HEIGHTS SQUARE 1,<br /> DUBAI HILLS, DUBAI
          </p>
          <p className="flex items-center gap-3 mb-3 text-sm">
            <Phone className="w-5 h-5 shrink-0" />
            <a
              href="tel:+971800468429"
              className="underline hover:no-underline"
            >
              +971 800 468429
            </a>
          </p>
          <p className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 shrink-0" />
            <a
              href="mailto:info@imtiaz.ae"
              className="underline hover:no-underline"
            >
              info@imtiaz.ae
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold border-b border-white pb-2 mb-4">
            GET IN TOUCH
          </h2>
          <div className="flex space-x-6 mt-4">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-gray-400 transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-20 text-sm  text-white fade-in">
          <p className="text-gray-400">© {currentYear} All rights reserved.</p>

          <a
            href="https://www.webxnep.com/"
            className="relative flex items-center gap-2 p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 -mt-5 mb-3"
          >
            <div className="flex items-center gap-2 bg-[#232266] rounded-full px-3 py-1">
              <p className="text-[#F5BC6D] text-xs">Designed & Developed by</p>
              <div className="w-12 h-8 overflow-hidden animate-spin-slow">
                <img
                  src="/webx/logo.svg"
                  alt="WebX logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </a>
        </div>
      
    </footer>
  );
};

export default Footer;
