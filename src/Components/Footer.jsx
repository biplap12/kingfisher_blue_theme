import React from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-screen relative text-white">
      {/* Background Image with Overlay */}
      <div className="absolute h-[70vh] z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] to-transparent"></div>

      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/67c7bc857d870bdadf59bea0/67c7bc857d870bdadf59bf37_Arial%20view%2001%20final%20(1).png" // Replace with your footer image
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className=" w-11/12 mx-auto absolute bottom-0 left-0 right-0 z-10 py-14 flex justify-between items-start gap-10 text-sm">
        <div className="relative">
          {/* Logo */}
          <img src="/logo/logo1.png" alt="Logo" className="h-8 mb-4" />
          <p className="text-gray-300">
            © {new Date().getFullYear()} Kingfisher Real-State | All Rights
            Reserved.
          </p>
        </div>

        {/* Resorts */}
        <div className=" flex flex-col items-center gap-4">
          <ul className="uppercase text-md tracking-wider font-semibold flex items-center justify-center gap-4 text-yellow-200">
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              Home
            </a>
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              About
            </a>
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              Properties
            </a>
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              Services
            </a>
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              Blogs
            </a>
            <a
              href="#"
              className="w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
            >
              Contact
            </a>
          </ul>
          <div className="felx justify-center items-center">
            <h4 className="font-semibold text-center text-zinc-400 mb-3 uppercase">
              Connect With US
            </h4>
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="text-yellow-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-yellow-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-yellow-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold mb-3 text-yellow-200">CONTACT US</h4>
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-2 text-gray-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100">
              <Mail className="w-4 h-4" /> info@kingfisherrealstate.com
            </a>
            <a className="flex items-center gap-2 text-gray-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100">
              <Phone className="w-4 h-4" /> +971 800 468429
            </a>
            <a className="flex items-center gap-2 text-gray-300 w-full hover:scale-125 hover:text-yellow-500 transition-all duration-100">
              <MessageCircle className="w-4 h-4" /> +971 800 468429
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
