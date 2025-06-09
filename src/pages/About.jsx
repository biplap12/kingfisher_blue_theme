
//     import React, { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const teamMembers = [
//   {
//     name: "And Neko Balda",
//     title: "Chief Development Officer (CDO)",
//     description:
//       "Eneko is a Technical Architect and Project Manager with over 15 years of experience at the renowned construction company ACR, where he was Group Leader for the northern region. At Kategora, he coordinates the Project Management activities.",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "John Doe",
//     title: "Chief Operating Officer (COO)",
//     description:
//       "John is an experienced operations manager who has worked in various multinational companies and now oversees the company’s operational strategies.",
//     imageUrl:
//       "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
// {
//     name: "Jane Smith",
//     title: "Chief Financial Officer (CFO)",
//     description:
//       "Jane has a solid background in finance, working with global investment firms, and she now manages the financial planning and risk management at the company.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Carlos Alvarez",
//     title: "Chief Marketing Officer (CMO)",
//     description:
//       "Carlos brings innovative marketing strategies and brand vision to life, with over 12 years in digital marketing and consumer engagement.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Lisa Wong",
//     title: "Chief Technology Officer (CTO)",
//     description:
//       "Lisa is a technology leader who has led multiple engineering teams in tech startups and is now responsible for overseeing all technical aspects of the company.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ];

// export default function About() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentMember = teamMembers[currentIndex];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (

//     <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-sm uppercase border-b border-white mb-4">
//             {currentMember.title}
//           </h2>
//           <h1 className="text-5xl    italic leading-none">
//             {currentMember.name.split(" ")[0]}
//             <span className="text-white   font-medium ml-2">
//               {currentMember.name.split(" ").slice(1).join(" ")}
//             </span>
//           </h1>
//           <p className="mt-6 text-lg leading-relaxed text-gray-300">
//             {currentMember.description}
//           </p>
//           <div className="mt-6 flex items-center space-x-4">
//             <button
//               onClick={handlePrev}
//               className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
//             >
//               <ArrowLeft />
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="relative flex-1 flex justify-center items-center">
//           <div className="relative z-10">
//             <img
//               src={currentMember.imageUrl}
//               alt={currentMember.name}
//               className="w-80 h-[500px] object-cover rounded-md shadow-lg"
//             />
//           </div>
//           <div className="absolute top-10 left-10 opacity-30 z-0">
//             <img
//               src={teamMembers[(currentIndex + 1) % teamMembers.length].imageUrl}
//               alt="next"
//               className="w-80 h-[500px] object-cover rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


   import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TbArrowDown, TbArrowNarrowDownDashed, TbArrowUp, TbArrowUpDashed } from "react-icons/tb";

const teamMembers = [
  {
    name: "And Neko Balda",
    title: "Chief Development Officer (CDO)",
    description:
      "Eneko is a Technical Architect and Project Manager with over 15 years of experience at the renowned construction company ACR, where he was Group Leader for the northern region. At Kategora, he coordinates the Project Management activities.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Doe",
    title: "Chief Operating Officer (COO)",
    description:
      "John is an experienced operations manager who has worked in various multinational companies and now oversees the company’s operational strategies.",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jane Smith",
    title: "Chief Financial Officer (CFO)",
    description:
      "Jane has a solid background in finance, working with global investment firms, and she now manages the financial planning and risk management at the company.",
    imageUrl:
      "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Carlos Alvarez",
    title: "Chief Marketing Officer (CMO)",
    description:
      "Carlos brings innovative marketing strategies and brand vision to life, with over 12 years in digital marketing and consumer engagement.",
    imageUrl:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lisa Wong",
    title: "Chief Technology Officer (CTO)",
    description:
      "Lisa is a technology leader who has led multiple engineering teams in tech startups and is now responsible for overseeing all technical aspects of the company.",
    imageUrl:
      "https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const currentMember = teamMembers[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
    setShowFullDescription(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
    setShowFullDescription(false);
  };

  return (
    <div className=" text-[#F5BC6D] -mt-23">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="text-4xl md:text-5xl font-bold bg-opacity-50 px-6 py-4 rounded">
          Home / About
        </div>
      </section>

      {/* Team Section */}
      <div className="primary-background-color text-[#F5BC6D] min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-10 border-b border-white pb-2 heading-font">
          Our Team
        </h1>
        <div className=" max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/3">
            <h2 className="text-sm uppercase border-b border-white mb-4">
              {currentMember.title}
            </h2>
            <h1 className="text-5xl italic leading-none">
              {currentMember.name.split(" ")[0]}
              <span className="text-gray font-medium ml-2">
                {currentMember.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className={`mt-6 text-lg leading-relaxed text-gray-300 ${
              showFullDescription ? "" : "line-clamp-3"
            }`}>
              {currentMember.description}
            </p>
            
            {currentMember.description.length > 100 && (
             <motion.button
                onClick={() => setShowFullDescription((prev) => !prev)}
                className="flex items-center justify-center w-5 h-5 rounded-full  text-white mt-3"
                animate={{ rotate: showFullDescription ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
               <TbArrowUpDashed size={25} />
              </motion.button>
            )}
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="relative flex-1 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentMember.imageUrl}
                src={currentMember.imageUrl}
                alt={currentMember.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-80 h-[500px] object-cover rounded-md shadow-lg z-30 relative"
              />
            </AnimatePresence>
            <motion.img
              src={teamMembers[(currentIndex + 1) % teamMembers.length].imageUrl}
              alt="next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-80 h-[500px] object-cover rounded-md absolute top-10 left-50 z-20"
            />
             <motion.img
              src={teamMembers[(currentIndex + 1) % teamMembers.length].imageUrl}
              alt="next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-80 h-[500px] object-cover rounded-md absolute top-20 left-70"
            />
          </div> */}
          <div className="relative flex-1 flex justify-center items-center h-[500px] overflow-hidden">
  {[0, 1, 2, 3].map((offset, i) => {
    const index = (currentIndex + offset) % teamMembers.length;
    const opacities = [1, 0.5, 0.3, 0.1];
    const zIndex = 50 - i;
    const translate = i * 100;

    return (
      <motion.img
        key={teamMembers[index].imageUrl}
        src={teamMembers[index].imageUrl}
        alt={teamMembers[index].name}
        initial={{ opacity: 0 }}
        animate={{ opacity: opacities[i] }}
        transition={{ duration: 0.5 }}
        onClick={() => setCurrentIndex(index)}
        className="w-100 h-[500px] object-cover rounded-md shadow-lg absolute cursor-pointer"
        style={{
          transform: `translate(${translate}px, ${(translate)}px)`,
          zIndex: zIndex
        }}
      />
    );
  })}
</div>

        </div>
      </div>
    </div>
  );
}