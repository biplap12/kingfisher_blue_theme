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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  bg-zinc-100 overflow-hidden z-0">
      {/* Background subtle pattern or shape */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Optional: add subtle geometric shapes or soft pattern here */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo/logo1.png" alt="Company Logo" className="h-14 mb-4" />
            <p className="text-gray-600 text-sm max-w-xs">
              Building excellence and trust in every square foot.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <span>
                  SUITE 203, PARK HEIGHTS SQUARE 1, DUBAI HILLS, DUBAI
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <a href="tel:+971800468429" className="hover:underline hover:text-yellow-600 transition">
                  +971 800 468429
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <a
                  href="mailto:info@kingfisherrealestate.com"
                  className="hover:underline hover:text-yellow-600 transition"
                >
                  info@kingfisherrealestate.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={Icon.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-300 hover:text-white transition duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300" />

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p className="text-black">© {currentYear} KingFisher Pvt. Ltd. All rights reserved.</p>
          <a
            href="https://www.webxnep.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-600 transition"
          >
            <span className="text-black">Designed & Developed by</span>
            <img
              src="/webx/logo.svg"
              alt="WebX logo"
              className="h-5 object-contain invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
