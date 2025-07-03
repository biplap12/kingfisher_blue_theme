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
    <div className="max-h-screen h-[700px] md:h-[450px]  relative flex flex-col">
      <footer className="absolute bottom-0 left-0 w-full bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <img
            src="./footer/BuildFooter.png"
            alt=" Footer Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-full md:max-w-7xl mx-auto px-6 py-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 ">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left ">
              <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo/logo1.png"
                  alt="Company Logo"
                  className="h-12 "
                />
              </div>
              <p className="text-gray-700 raleway-regular  text-base max-w-xs leading-relaxed">
                Building excellence and trust in every square foot.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg  raleway-regular font-medium text-gray-800 mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5 group-hover:text-orange-600 transition-colors duration-300" />
                  <span className="text-sm text-black leading-relaxed">
                    SUITE 203, PARK HEIGHTS SQUARE 1, DUBAI HILLS, DUBAI
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-black group-hover:text-orange-600 transition-colors duration-300" />
                  <a
                    href="tel:+971800468429"
                    className="text-sm text-black hover:text-orange-600 transition-colors duration-300"
                  >
                    +971 800 468429
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-black group-hover:text-green-600 transition-colors duration-300" />
                  <a
                    href="mailto:info@kingfisherrealestate.com"
                    className="text-sm text-black hover:text-green-600 transition-colors duration-300"
                  >
                    info@kingfisherrealestate.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg raleway-regular font-medium text-black mb-6">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-black hover:bg-white hover:text-orange-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-gray-700 hover:bg-white hover:text-orange-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-gray-700 hover:bg-white hover:text-orange-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-gray-700 hover:bg-white hover:text-orange-600 transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white border-opacity-30 mb-8"></div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 text-sm ">
            <p className="text-black raleway-regular ">
              © {currentYear} KingFisher Pvt. Ltd. All rights reserved.
            </p>
            <a
              href="https://www.webxnep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors duration-300 group"
            >
              <span>Designed & Developed by</span>
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/webx/webx-blacklogo.jpg"
                  alt="WebX logo"
                  className="h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
