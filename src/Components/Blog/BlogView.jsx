import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogPost = {
  title: "Kingfisher Real Estate",
  author: "Biplap Neupane",
  date: "June 12, 2025",
  sections: [
    {
      heading: "How to Buy a House",
      paragraphs: [
        "Buying a house is a big decision and requires careful planning. This guide will help you understand the steps involved in purchasing your dream home.",
        "First, assess your financial situation and determine your budget. Make sure to include additional costs like taxes, insurance, and maintenance.",
        "Explore different neighborhoods to find the perfect fit for your lifestyle. Consider proximity to schools, work, and amenities.",
        "Visit open houses and schedule private tours to get a feel for what’s available on the market.",
      ],
      bullets: [
        "Assess your budget realistically.",
        "Choose neighborhoods carefully.",
        "Inspect multiple properties before deciding.",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Start by exploring neighborhoods and house listings.",
        },
        {
          src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Calculate your budget and mortgage options carefully.",
        },
        {
          src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Find the ideal location that suits your needs.",
        },
      ],
    },
    {
      heading: "Financing Your Home",
      paragraphs: [
        "Securing a mortgage is a crucial step. Shop around for the best rates and get pre-approved to strengthen your buying position.",
        "Understand different mortgage types such as fixed-rate and adjustable-rate mortgages, and choose what fits your financial situation.",
        "Keep in mind your credit score affects your loan eligibility and interest rate.",
        "Prepare all necessary documents like income proof, tax returns, and bank statements before applying.",
      ],
      bullets: [
        "Get pre-approved by lenders.",
        "Compare fixed vs adjustable mortgage rates.",
        "Maintain a good credit score.",
        "Gather all financial documents early.",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Meeting with a mortgage advisor to discuss financing.",
        },
      ],
    },
    {
      heading: "Home Inspection Tips",
      paragraphs: [
        "Never skip a home inspection. Hire a certified professional to assess the condition of the house.",
        "Inspect for structural issues, roof condition, plumbing, electrical systems, and pests.",
        "Use the inspection report to negotiate repairs or price adjustments with the seller.",
        "Remember, a thorough inspection can save you thousands in unexpected repairs.",
      ],
      bullets: [
        "Hire a certified home inspector.",
        "Check roof, plumbing, electrical, and pests.",
        "Negotiate repairs using inspection results.",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "A professional home inspector checking the roof.",
        },
      ],
    },
    {
      heading: "Conclusion",
      paragraphs: [
        "Buying a house is exciting but can be overwhelming. Take your time, do your research, and consult professionals when needed.",
        "Kingfisher Real Estate is here to guide you every step of the way!",
      ],
    },
  ],
};

export default function BlogViewer() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen mt-20 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 border border-zinc-300 rounded-lg">
        <button
          onClick={() => (navigate ? navigate(-1) : window.history.back())}
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-serif font-semibold text-[#F5BC6D] mb-6">
          {blogPost.title}
        </h1>

        <p className="text-gray-500 mb-12">
          By <strong>{blogPost.author}</strong> — <em>{blogPost.date}</em>
        </p>

        {blogPost.sections.map((section, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-3xl font-serif font-semibold text-[#F5BC6D] border-b-4 border-[#F5BC6D] pb-2 mb-6">
              {section.heading}
            </h2>

            {section.paragraphs.map((para, pidx) => (
              <p
                key={pidx}
                className="mb-6 text-lg leading-relaxed text-gray-700"
              >
                {para}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                {section.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="mb-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {section.images && (
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="max-w-4xl rounded-lg overflow-hidden"
              >
                {section.images.map((img, iidx) => (
                  <SwiperSlide
                    key={iidx}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={img.src}
                      alt={img.description}
                      className="rounded-lg w-full max-h-[400px] object-cover"
                    />
                    <p className="mt-3 text-sm italic text-gray-500 max-w-xl text-center">
                      {img.description}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
