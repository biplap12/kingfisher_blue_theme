import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-screen relative text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/67c7bc857d870bdadf59bea0/67c7bc857d870bdadf59bf37_Arial%20view%2001%20final%20(1).png" // Replace with your footer image
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-[#00000088]"></div>
      </div>

      {/* Content Layer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-11/12 mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo */}
        <div>
          <img src="/logo/logo1.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-300">
            © {new Date().getFullYear()} Imtiaz Properties. All Rights Reserved.
          </p>
        </div>

        {/* Resorts */}
        <div>
          <h4 className="font-semibold text-white mb-3">RESORTS</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Island Heights</li>
            <li>The Beach Residence</li>
            <li>The Beach Vista</li>
            <li>The Beach House</li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h4 className="font-semibold text-white mb-3">RAS AL KHAIMAH</h4>
          <p className="text-gray-300">
            Boulevard Plaza, Tower 2, Office 1104,
            <br />
            Dubai, United Arab Emirates
          </p>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-white mb-3">CONTACT US</h4>
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <Mail className="w-4 h-4" /> info@imtiaz.ae
          </p>
          <p className="flex items-center gap-2 text-gray-300 mb-4">
            <Phone className="w-4 h-4" /> +971 800 468429
          </p>
          <h4 className="font-semibold text-white mb-3">FOLLOW US</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-100">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-100">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-100">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
