import React, { useContext, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TbArrowUpDashed } from "react-icons/tb";
import { MenuContext } from "../state/MenuContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import Slider from "../Components/Home/Slider";
import { image } from "framer-motion/client";
import {
  FaArrowRight,
  FaBullseye,
  FaCheckCircle,
  FaEye,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { showErrorToast } from "../config/toastConfig";
import api from "../services/api";

export default function About() {

  const divRef = useRef(null);
  const { setMenuColor } = useContext(MenuContext);
  const isVisible = useInView(divRef, { once: false });
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMenuColor("dark");
    fetchTeamMembers();
  }, [isVisible]);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/v1/team-members/active');
      if (response.data.success) {
        setTeamMembers(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
      showErrorToast('Failed to load team members. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-font">
              About
            </h1>
            <Breadcrumbs />
          </div>
        </div>

        <div className=" min-h-screen flex flex-col    mx-20 p-6 darkSection">
          <Link
            to={"/"}
            className="flex justify-start items-center text-gray-700"
          >
            <ArrowLeft size={15} /> Back
          </Link>
          {/* Our Story */}
          <div className="text-center ">
            <h2 className="text-4xl md:text-5xl heading-font uppercase mb-6">
              Our Story
            </h2>
            <p className="text-lg raleway-regular  text-gray-500 mx-auto ">
              Framed by a stunning ocean panorama, Kingfisher&apos;s newest landmark
              on Dubai Islands captures the essence of refined coastal living.
              Nestled along the marina, this exceptional development offers a
              seamless blend of tranquility, energy, and connectivity—where
              every feature is thoughtfully designed to elevate modern
              lifestyles.
            </p>
          </div>

          <section className="py-15 px-6 max-w-screen-xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16  ">
              {/* Mission */}
              <div className=" rounded-3xl p-10  relative">
                <h3 className="text-4xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                  <FaBullseye className="text-blue-700" />
                  <span className="mission_font">Our</span>
                  <span className="mission_font">Mission</span>
                </h3>
                <ul className="absolute left-20 text-xl text-gray-700 space-y-4 raleway-regular">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    Deliver trusted, transparent, and personalized real estate
                    services.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    Empower individuals and families through smart property
                    decisions.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    Build lasting value in communities we serve.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    Operate with integrity, empathy, and a client-first mindset.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    Create spaces that inspire comfort, safety, and belonging.
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className=" rounded-3xl p-10  relative">
                <h3 className="text-4xl font-semibold text-green-900 mb-6 flex items-center gap-3">
                  <FaEye className="text-green-700" />
                  <span className="mission_font">Our</span>
                  <span className="mission_font">Vision</span>
                </h3>
                <ul className="text-xl text-gray-700 space-y-4 raleway-regular">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    Become a leading name in innovative and people-first real
                    estate.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    Shape communities that are sustainable, smart, and
                    connected.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    Redefine the property experience through technology and
                    design.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    Lead with purpose, delivering homes and spaces that elevate
                    lives.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    Foster long-term relationships built on trust and
                    excellence.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-18 px-6 max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
              Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-3 text-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading team members...</p>
                </div>
              ) : teamMembers.length > 0 ? (
                teamMembers.map((member) => (
                  <div
                    key={member._id}
                    className="relative group rounded-md w-full overflow-hidden"
                    style={{ height: "500px" }}
                  >
                    {/* Image */}
                    <img
                      src={member.image || 'https://via.placeholder.com/300x400?text=Team+Member'}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-md"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400?text=Team+Member';
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary-color bg-opacity-70 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md flex flex-col">
                      {/* Rotated name */}
                      <div className="absolute bottom-2 left-10 transform -translate-y-1/2 rotate-[-90deg] origin-left max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap px-2 bg-primary-color bg-opacity-50">
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                          {member.name}
                        </h3>
                      </div>

                      {/* Social icons */}
                      <div className="absolute top-5 right-5 flex flex-col gap-4">
                        {member.facebookUrl && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                          >
                            <FaFacebook size={24} />
                          </a>
                        )}
                        {member.twitterUrl && (
                          <a
                            href={member.twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900"
                          >
                            <FaInstagram size={24} />
                          </a>
                        )}
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0A66C2]"
                          >
                            <FaLinkedin size={24} />
                          </a>
                        )}
                      </div>
                      
                      {/* Action Button */}
                      <div className="mt-auto self-end m-5">
                        <div className="rounded-full hover:bg-gray-200 transition">
                          <img
                            src="./logo/icon.png"
                            alt="logo icon"
                            height={20}
                            width={35}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-20">
                  <p className="text-gray-600">No team members found.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
