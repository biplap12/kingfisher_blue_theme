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
    <footer className="relative bg-gray-900 w-full text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer/kingfisher.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>


      {/* Content */}
      <div className="relative z-0 max-w-8xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 text-sm">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo/logo1.png"
              alt="Company Logo"
              className="h-14 mb-4"
            />
            <p className="text-gray-300 max-w-xs text-center md:text-left">
              Building excellence and trust in every square foot.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 w-5 h-5 text-yellow-300" />
                SUITE 203, PARK HEIGHTS SQUARE 1, DUBAI HILLS, DUBAI
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-300" />
                <a href="tel:+971800468429" className="hover:underline">
                  +971 800 468429
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-300" />
                <a
                  href="mailto:info@kingfisherrealestate.com"
                  className="hover:underline"
                >
                  info@kingfisherrealestate.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={Icon.name}
                  className="text-white hover:text-yellow-300 transition"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>© {currentYear} KingFisher Pvt. Ltd. All rights reserved.</p>
          <a
            href="https://www.webxnep.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <span>Designed & Developed by</span>
            <img
              src="/webx/logo.svg"
              alt="WebX logo"
              className="h-5 w-13 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
