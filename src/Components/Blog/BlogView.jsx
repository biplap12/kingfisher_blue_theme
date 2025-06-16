

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ArrowLeft, Clock } from "lucide-react";
// import "swiper/css";
// import { useBannerHeight } from "../../Context/BannerHeightContext";

// const relatedContents = [
//   { title: "Top 10 Interior Design Trends of 2025", link: "#" },
//   { title: "5 Mistakes to Avoid When Buying a House", link: "#" },
//   { title: "How to Secure the Best Mortgage Rates", link: "#" },
// ];

// const contentTags = [
//   "Home Buying",
//   "Mortgage",
//   "Real Estate Tips",
//   "Property Inspection",
//   "Finance",
// ];


// const blogPost = {
//   title: "Your Complete Guide to Buying Your Dream Home",
//   author: "WebX Content Creator",
//   date: "Jun 12, 2025",
//   readTime: "8 min read",
//   sections: [
//     {
//       heading: "How to Buy a House",
//       paragraphs: [
//         "Buying a house is one of life's biggest decisions and requires careful planning. This comprehensive guide will walk you through every step of purchasing your dream home, from initial planning to closing day.",
//         "Start by honestly assessing your financial situation and determining a realistic budget. Remember to factor in additional costs beyond the purchase price, including property taxes, homeowner's insurance, maintenance, and potential HOA fees.",
//         "Take time to explore different neighborhoods thoroughly. Consider not just the house itself, but the community, proximity to schools, your workplace, shopping centers, and recreational amenities that matter to your lifestyle.",
//         "Make the most of open houses and schedule private tours to get a comprehensive feel for what's available in your price range. Don't rush this process — the right home is worth waiting for.",
//       ],
//       bullets: [
//         "Create a realistic budget including all associated costs",
//         "Research neighborhoods that align with your lifestyle",
//         "Visit multiple properties before making decisions",
//       ],
//       images: [
//         {
//           src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
//           description: "Start by exploring neighborhoods and house listings to understand the market.",
//         },
//         {
//           src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
//           description: "Calculate your budget and mortgage options carefully before house hunting.",
//         },
//         {
//           src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
//           description: "Find the ideal location that suits your current and future needs.",
//         },
//       ],
//     },
//     {
//       heading: "Financing Your Home",
//       paragraphs: [
//         "Securing the right mortgage is crucial to your home buying success. Shop around with multiple lenders to compare rates and terms, and get pre-approved to strengthen your negotiating position with sellers.",
//         "Understanding different mortgage types is essential. Fixed-rate mortgages offer stability with consistent payments, while adjustable-rate mortgages may start lower but can fluctuate over time. Choose what aligns with your financial goals and risk tolerance.",
//         "Your credit score significantly impacts both your loan eligibility and the interest rate you'll receive. Even small improvements in your credit score can save you thousands over the life of your loan.",
//         "Prepare all necessary documentation well in advance. Lenders typically require proof of income, tax returns, bank statements, and employment verification. Having these ready speeds up the approval process.",
//       ],
//       bullets: [
//         "Get pre-approved by multiple lenders to compare offers",
//         "Understand the differences between mortgage types",
//         "Monitor and improve your credit score before applying",
//       ],
//       images: [
//         {
//           src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
//           description: "Meeting with a mortgage advisor to discuss financing options and rates.",
//         },
//       ],
//     },
//     {
//       heading: "Home Inspection Tips",
//       paragraphs: [
//         "A professional home inspection is non-negotiable — it's your protection against costly surprises. Hire a certified, experienced inspector who will thoroughly evaluate the property's condition.",
//         "A comprehensive inspection covers structural integrity, roof condition, plumbing systems, electrical work, HVAC systems, and potential pest issues. Don't overlook any area of the home.",
//         "Use the inspection report as a negotiation tool. Significant issues can be grounds for requesting repairs, credits, or price reductions from the seller.",
//         "Remember that a thorough inspection, while costing a few hundred dollars upfront, can potentially save you thousands in unexpected repairs and give you peace of mind about your investment.",
//       ],
//       bullets: [
//         "Always hire a certified, experienced home inspector",
//         "Ensure inspection covers all major systems and structure",
//         "Use findings to negotiate repairs or price adjustments",
//       ],
//       images: [
//         {
//           src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
//           description: "A professional home inspector thoroughly checking the roof and structural elements.",
//         },
//       ],
//     },
//   ],
// };


// export default function BlogViewer() {
//   const bannerRef = useRef(null);
//   const { setBannerHeight } = useBannerHeight();

//   useEffect(() => {
//     if (bannerRef.current) {
//       setBannerHeight(bannerRef.current.offsetHeight);
//     }
//   }, []);

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Banner */}
//       <div
//         className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
//         style={{
//           backgroundImage: 'url("/property/property.jpg")',
//           fontFamily: `'Wellsbrook Initials SG Regular'`,
//           height: "75vh",
//           padding: "0 50px",
//         }}
//         ref={bannerRef}
//       >
//         <div className="absolute inset-0 bg-black/60 z-0"></div>
//         <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
//           <p className="text-6xl font-bold heading-font tracking-widest uppercase leading-20">
//             Blog
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
//         {/* Main Article */}
//         <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center text-gray-600 hover:text-gray-900 mb-12 text-sm font-medium"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back
//           </button>

//           <article>
//             <header className="mb-12">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 font-serif">
//                 {blogPost.title}
//               </h1>
//               <div className="flex items-center text-sm text-gray-600 mb-8">
//                 <span className="font-medium text-gray-900 mr-2">
//                   {blogPost.author}
//                 </span>
//                 <span className="mr-2">·</span>
//                 <span className="mr-2">{blogPost.date}</span>
//                 <span className="mr-2">·</span>
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>{blogPost.readTime}</span>
//                 </div>
//               </div>
//             </header>

//             {/* Sections */}
//             <div className="prose prose-lg max-w-none">
//               {blogPost.sections.map((section, idx) => (
//                 <section key={idx} className="mb-16">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
//                     {section.heading}
//                   </h2>

//                   {section.paragraphs.map((para, pidx) => (
//                     <p
//                       key={pidx}
//                       className="text-gray-800 text-lg leading-relaxed mb-6"
//                       style={{ lineHeight: "1.75" }}
//                     >
//                       {para}
//                     </p>
//                   ))}

//                   {section.bullets && (
//                     <ul className="list-disc pl-6 mb-8 text-gray-800 text-lg leading-relaxed space-y-2">
//                       {section.bullets.map((bullet, bidx) => (
//                         <li key={bidx}>{bullet}</li>
//                       ))}
//                     </ul>
//                   )}

//                   {section.images && (
//                     <figure className="mb-12">
//                       <Swiper spaceBetween={0} slidesPerView={1} className="w-full">
//                         {section.images.map((img, iidx) => (
//                           <SwiperSlide key={iidx}>
//                             <img
//                               src={img.src}
//                               alt={img.description}
//                               className="w-full h-auto rounded-sm"
//                             />
//                             <figcaption className="text-center text-gray-500 text-sm mt-4 italic">
//                               {img.description}
//                             </figcaption>
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </figure>
//                   )}
//                 </section>
//               ))}
//             </div>

//             {/* Conclusion */}
//             <div className="border-t border-gray-200 pt-12 mt-16">
//               <p className="text-gray-800 text-lg leading-relaxed mb-6">
//                 Buying a house is exciting but can be overwhelming. Take your time,
//                 do your research, and consult professionals when needed. Remember, the
//                 right preparation today leads to the perfect home tomorrow.
//               </p>
//               <p className="text-gray-800 text-lg leading-relaxed font-medium">
//                 Kingfisher Real Estate is here to guide you every step of the way!
//               </p>
//             </div>

//             {/* ⭐️ Content Tags */}
//             <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-3">
//               {contentTags.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </article>
//         </div>

//         {/* ⭐️ Related Contents Panel */}
//         <aside className="lg:w-80 flex-shrink-0">
//           <div className="sticky top-24">
//             <h3 className="text-xl font-bold mb-6 text-gray-900">Related Posts</h3>
//             <ul className="space-y-4">
//               {relatedContents.map((item, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={item.link}
//                     className="text-gray-700 hover:text-orange-500 transition font-medium"
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, Clock } from "lucide-react";
import "swiper/css";
import { useBannerHeight } from "../../Context/BannerHeightContext";


const blogPost = {
  title: "Your Complete Guide to Buying Your Dream Home",
  author: "WebX Content Creator",
  date: "Jun 12, 2025",
  readTime: "8 min read",
tags: ["Real Estate", "Home Buying", "Finance", "Mortgage"],

  sections: [
    {
      // heading: "How to Buy a House",
      paragraphs: [
        "Buying a house is one of life's biggest decisions and requires careful planning. This comprehensive guide will walk you through every step of purchasing your dream home, from initial planning to closing day.",
        "Start by honestly assessing your financial situation and determining a realistic budget. Remember to factor in additional costs beyond the purchase price, including property taxes, homeowner's insurance, maintenance, and potential HOA fees.",
        "Take time to explore different neighborhoods thoroughly. Consider not just the house itself, but the community, proximity to schools, your workplace, shopping centers, and recreational amenities that matter to your lifestyle.",
        "Make the most of open houses and schedule private tours to get a comprehensive feel for what's available in your price range. Don't rush this process — the right home is worth waiting for.",
      ],
      bullets: [
        "Create a realistic budget including all associated costs",
        "Research neighborhoods that align with your lifestyle",
        "Visit multiple properties before making decisions",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Start by exploring neighborhoods and house listings to understand the market.",
        },
        {
          src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Calculate your budget and mortgage options carefully before house hunting.",
        },
        {
          src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Find the ideal location that suits your current and future needs.",
        },
      ],
    },
    {
      heading: "Financing Your Home",
      paragraphs: [
        "Securing the right mortgage is crucial to your home buying success. Shop around with multiple lenders to compare rates and terms, and get pre-approved to strengthen your negotiating position with sellers.",
        "Understanding different mortgage types is essential. Fixed-rate mortgages offer stability with consistent payments, while adjustable-rate mortgages may start lower but can fluctuate over time. Choose what aligns with your financial goals and risk tolerance.",
        "Your credit score significantly impacts both your loan eligibility and the interest rate you'll receive. Even small improvements in your credit score can save you thousands over the life of your loan.",
        "Prepare all necessary documentation well in advance. Lenders typically require proof of income, tax returns, bank statements, and employment verification. Having these ready speeds up the approval process.",
      ],
      bullets: [
        "Get pre-approved by multiple lenders to compare offers",
        "Understand the differences between mortgage types",
        "Monitor and improve your credit score before applying",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "Meeting with a mortgage advisor to discuss financing options and rates.",
        },
      ],
    },
    {
      heading: "Home Inspection Tips",
      paragraphs: [
        "A professional home inspection is non-negotiable — it's your protection against costly surprises. Hire a certified, experienced inspector who will thoroughly evaluate the property's condition.",
        "A comprehensive inspection covers structural integrity, roof condition, plumbing systems, electrical work, HVAC systems, and potential pest issues. Don't overlook any area of the home.",
        "Use the inspection report as a negotiation tool. Significant issues can be grounds for requesting repairs, credits, or price reductions from the seller.",
        "Remember that a thorough inspection, while costing a few hundred dollars upfront, can potentially save you thousands in unexpected repairs and give you peace of mind about your investment.",
      ],
      bullets: [
        "Always hire a certified, experienced home inspector",
        "Ensure inspection covers all major systems and structure",
        "Use findings to negotiate repairs or price adjustments",
      ],
      images: [
        {
          src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
          description: "A professional home inspector thoroughly checking the roof and structural elements.",
        },
      ],
    },
  ],
};
const relatedContents = [
  {
    title: "Top Mortgage Mistakes to Avoid",
    description: "Learn about the most common mortgage pitfalls and how to steer clear of them.",
    link: "#",
    image: "/blog/blog1.jpg",
  },
  {
    title: "5 Things to Check Before Moving In",
    description: "A handy checklist every new homeowner should go through before moving day.",
    link: "#",
    image: "/blog/blog2.jpg",
  },
  {
    title: "Budgeting for Your First Home",
    description: "Smart financial planning tips to make your first home-buying experience smooth.",
    link: "#",
    image: "/blog/blog3.jpg",
  },
];

export default function BlogViewer() {
  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div
        className="relative w-full mx-auto h-screen bg-cover bg-center heading-font tracking-widest text-white -mt-25"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p className="text-6xl font-bold tracking-widest uppercase">Blog</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* Article */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-serif">
              {blogPost.title}
            </h1>

            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium text-gray-900 mr-2">{blogPost.author}</span>
              <span className="mr-2">·</span>
              <span className="mr-2">{blogPost.date}</span>
              <span className="mr-2">·</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {blogPost.sections.map((section, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>

                {section.paragraphs.map((para, pidx) => (
                  <p key={pidx} className="text-gray-800 text-lg  raleway-regular leading-relaxed mb-4">
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc pl-6 mb-6 text-gray-800 text-lg raleway-regular leading-relaxed space-y-2">
                    {section.bullets.map((bullet, bidx) => (
                      <li key={bidx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.images && (
                  <figure className="mb-8">
                    <Swiper spaceBetween={0} slidesPerView={1} className="w-full">
                      {section.images.map((img, iidx) => (
                        <SwiperSlide key={iidx}>
                          <img
                            src={img.src}
                            alt={img.description}
                            className="w-full h-auto rounded"
                          />
                          <figcaption className="text-center text-gray-500 text-sm mt-2 italic">
                            {img.description}
                          </figcaption>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </figure>
                )}
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {blogPost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related / Recommended Section */}
        <div className="border-t border-gray-200 pt-12 mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recommended for you</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedContents.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="group block transition duration-200 hover:scale-[1.02]"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-[250px] transition group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
