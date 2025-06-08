// import { FaInstagram, FaFacebookF } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ToggleSidebar({ onClose }) {
//   const navItems = [
//     ["/", "Home"],
//     ["/properties", "Properties"],
//     ["/about", "About Us"],
//     ["/services", "Services"],
//     ["/blog", "Blog"],
//     ["/contact", "Contact"],
//   ];

//   const navContainer = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const navItem = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 22,
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//      <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   className="fixed inset-0 bg-gradient-to-br from-black-900/80 to-black/80 backdrop-blur-md z-50"
//   onClick={onClose}
// >

//         <motion.div
//           initial={{ x: "-100%", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: "-100%", opacity: 0 }}
//           transition={{ type: "spring", stiffness: 260, damping: 30 }}
//           className="fixed top-0 left-0 w-full md:w-[400px] h-full rounded-r-3xl p-8 md:p-10 overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Navigation */}
//           <motion.nav
//             initial="hidden"
//             animate="visible"
//             variants={navContainer}
//             className="flex flex-col gap-4 text-lg mt-10"
//           >
//             {navItems.map(([href, label]) => (
//               <motion.a
//                 key={href}
//                 href={href}
//                 variants={navItem}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="group relative block px-4 py-3 rounded-full font-semibold tracking-wide uppercase text-5xl text-white hover:text-white transition-all duration-300"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r transition-opacity duration-300 -z-10" />
//                 {label}
//               </motion.a>
//             ))}
//           </motion.nav>

//           {/* Divider */}
//           <div className="my-10 border-t border-gray-300"></div>

//           {/* Social Icons */}
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="flex justify-center  gap-6"
//           >
//             {[
//               {
//                 icon: <FaInstagram size={26} />,
//                 hoverColor: "hover:text-pink-500",
//               },
//               {
//                 icon: <FaFacebookF size={26} />,
//                 hoverColor: "hover:text-blue-500",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.2, rotate: 8 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className={`text-gray-600 ${item.hoverColor} transition-all duration-300 cursor-pointer`}
//               >
//                 {item.icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }


// import { FaInstagram, FaFacebookF } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ToggleSidebar({ onClose }) {
//   const navItems = [
//     ["/", "Home"],
//     ["/properties", "Properties"],
//     ["/about", "About Us"],
//     ["/services", "Services"],
//     ["/blog", "Blog"],
//     ["/contact", "Contact"],
//   ];

//   const navContainer = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const navItem = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 22,
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-gradient-to-br from-black/80 to-black/80 backdrop-blur-md z-50"
//         onClick={onClose}
//       >
//         {/* Sidebar Content */}
//         <motion.div
//           initial={{ x: "-100%", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: "-100%", opacity: 0 }}
//           transition={{ type: "spring", stiffness: 260, damping: 30 }}
//           className="fixed top-0 left-0 w-full md:w-[400px] h-full rounded-r-3xl p-8 md:p-10 overflow-y-auto flex flex-col"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Navigation */}
//           <motion.nav
//             initial="hidden"
//             animate="visible"
//             variants={navContainer}
//             className="flex flex-col items-start gap-4 text-lg mt-10"
//           >
//             {navItems.map(([href, label]) => (
//               <motion.a
//                 key={href}
//                 href={href}
//                 variants={navItem}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="group relative block px-4 py-3 rounded-full font-semibold tracking-wide uppercase text-5xl text-white hover:text-white transition-all duration-300"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r transition-opacity duration-300 -z-10" />
//                 {label}
//               </motion.a>
//             ))}
//           </motion.nav>

//           {/* Divider */}
//           {/* <div className="my-10 border-t border-gray-300 w-full" /> */}
//         </motion.div>

//         {/* Centered Social Icons (overlayed on full screen) */}
//         <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="flex justify-center gap-6 pointer-events-auto"
//           >
//             {[
//               {
//                 icon: <FaInstagram size={30} />,
//                 hoverColor: "hover:text-pink-500",
//               },
//               {
//                 icon: <FaFacebookF size={30} />,
//                 hoverColor: "hover:text-blue-500",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.2, rotate: 8 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className={`text-gray-300 ${item.hoverColor} transition-all duration-300 cursor-pointer`}
//               >
//                 {item.icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ToggleSidebar({ onClose }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [navHovered, setNavHovered] = useState(false);

  const navItems = [
    ["/", "Home"],
    ["/properties", "Properties"],
    ["/about", "About Us"],
    ["/blog", "blog"],
    ["/contact", "Contact"],
  ];

  const navContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-black/80 to-black/80 backdrop-blur-md z-50"
        onClick={onClose}
      >
        {/* Sidebar Content */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-10 left-10 w-full md:w-[600px] h-full rounded-r-3xl p-8 md:p-10 overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navContainer}
            className="flex flex-col items-start gap-4 text-lg mt-10"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => {
              setNavHovered(false);
              setHoveredIndex(null);
            }}
          >
            {navItems.map(([href, label], i) => {
              // Determine text color class based on hover states
              let textColorClass = "text-blue-300";

              if (navHovered) {
                textColorClass = i === hoveredIndex ? "text-blue-300" : "text-white";
              }

              return (
                <motion.div
                  variants={navItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative block px-4 py-2 rounded-full font-bold tracking-wide font-serif text-6xl uppercase  transition-colors duration-300 ${textColorClass}`}
                >
                  <Link
                    key={href}
                    to={href}
                    onClick={onClose}
                  >
                    {label}

                    <span
                      className={`absolute -top-1 -right-1 rounded-full border w-6 h-6 flex items-center justify-center text-xs ${textColorClass}`}
                    >
                      {i + 1}
                    </span>
                  </Link>
                </motion.div>

              );
            })}
          </motion.nav>
        </motion.div>

        {/* Centered Social Icons */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-6 pointer-events-auto"
          >
            {[
              {
                icon: <FaInstagram size={30} />,
                hoverColor: "hover:text-pink-500",
              },
              {
                icon: <FaFacebookF size={30} />,
                hoverColor: "hover:text-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-gray-300 ${item.hoverColor} transition-all duration-300 cursor-pointer`}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
