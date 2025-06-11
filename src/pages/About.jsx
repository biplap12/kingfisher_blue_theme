import React, { useContext, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TbArrowUpDashed } from "react-icons/tb";
import { MenuContext } from "../state/ContextMenu";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

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

  const divRef = useRef(null);
  const { setMenuColor } = useContext(MenuContext);
  const isVisible = useInView(divRef, { once: false });

  useEffect(() => {
    setMenuColor("dark");
  }, [isVisible]);

  return (
    <div className="text-[#F5BC6D] -mt-23">
      <div className="relative h-auto -mt-25">
        <div
          className="relative h-[50vh] mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 backdrop-blur-sm z-20" />
          <div className="relative z-30 text-center max-w-2xl mx-auto px-6 pt-32 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-font">About</h1>
            <Breadcrumbs />
           
          </div>
        </div>

        <div className="text-[#F5BC6D] min-h-screen flex flex-col mx-20 p-6 darkSection">
          <Link to={'/'} className="flex justify-start items-center text-gray-700">
            <ArrowLeft size={15} /> Back
          </Link>

          <div className="py-10 max-w-4xl">
            <h2 className="text-4xl uppercase tracking-wider mb-5 pb-2 border-[#c6a664] inline-block heading-font">
              Why Us?
            </h2>
            <p className="mt-2 text-base md:text-lg text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto
              error odio sunt vel harum, laboriosam, molestias assumenda reiciendis
              ipsum, ex rem nihil eveniet corporis quae minima beatae magnam consequatur?
            </p>
          </div>

          <h2 className="text-4xl uppercase tracking-wider mt-15 pb-2 heading-font">
            Our Team
          </h2>
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <h2 className="text-sm uppercase border-b border-white mb-4 secondary-color">
                {currentMember.title}
              </h2>
              <h1 className="text-5xl italic leading-none">
                {currentMember.name.split(" ")[0]}
                <span className="text-gray ml-2">
                  {currentMember.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className={`mt-6 text-lg leading-relaxed text-gray-500 ${showFullDescription ? "" : "line-clamp-3"}`}>
                {currentMember.description}
              </p>
              {currentMember.description.length > 100 && (
                <motion.button
                  onClick={() => setShowFullDescription((prev) => !prev)}
                  className="flex items-center justify-center w-5 h-5 rounded-full text-white mt-3"
                  animate={{ rotate: showFullDescription ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TbArrowUpDashed size={25} color="black" />
                </motion.button>
              )}
              <div className="mt-6 flex items-center space-x-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-[#F5BC6D] flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <ArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-[#F5BC6D] flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

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
                      transform: `translate(${translate}px, ${translate}px)`,
                      zIndex: zIndex,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
