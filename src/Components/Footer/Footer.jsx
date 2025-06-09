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
    <footer
      id="dark-section"
      className="relative min-h-screen flex items-end text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1643267629353-1cefe0ce6e7c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-8 px-6 ">
        <div className="max-w-9xl mx-auto flex flex-col lg:flex-row justify-between items-top gap-10  mb-20">
          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src="/logo/logo1.png"
              alt="Company Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Contact Details */}
          <div className=" flex justify-between items-top">
            <div className=" ">
              <h2 className="text-2xl font-semibold pb-2 mb-4">DETAILS</h2>

              <div className="flex flex-col justify-between">
                <p className="flex items-start gap-3 mb-3 text-sm leading-relaxed">
                  <MapPin className="mt-1 w-5 h-5 shrink-0 text-yellow-200" />
                  SUITE 203, PARK HEIGHTS SQUARE 1, DUBAI HILLS, DUBAI
                </p>
                <p className="flex items-top gap-3 mb-3 text-sm">
                  <Phone className="w-5 h-5 shrink-0 text-yellow-200" />
                  <a
                    href="tel:+971800468429"
                    className="underline hover:no-underline"
                  >
                    +971 800 468429
                  </a>
                </p>
                <p className="flex items-top gap-3 text-sm">
                  <Mail className="w-5 h-5 shrink-0 text-yellow-200" />
                  <a
                    href="mailto:info@imtiaz.ae"
                    className="underline hover:no-underline"
                  >
                    info@kingfisherrealstate.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex-1 items-center justify-end">
            <h2 className="text-2xl font-semibold text-end ">GET IN TOUCH</h2>
            <div className="flex space-x-4 mt-4 justify-end text-yellow-200">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-gray-300 transition"
                  aria-label={Icon.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-end text-sm text-white border-t border-yellow-900">
          <p className="text-gray-400">
            © {currentYear} All Rights Reserved | Flyeast Nepal Pvt. Ltd.
          </p>

          <a
            href="https://www.webxnep.com/"
            target="_blank"
            className="relative flex items-end justify-end gap-2"
          >
            <div className="flex items-center gap-2 py-1">
              <p className="text-xs hover:underline">Designed & Developed by</p>
              <div className="w-12 h-8 overflow-hidden animate-spin-slow">
                <img
                  src="/webx/logo.svg"
                  alt="WebX logo"
                  className="w-full h-full object-contain hover:scale-105"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
