// import React, { useEffect, useRef, useState } from "react";
// import { properties } from "../data/properties";
// import FilterSidebar from "../components/FilterSidebar";
// import PropertyCard from "../components/PropertyCard";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PropertyListing = () => {
//   const [search, setSearch] = useState("");
//   const [priceRange, setPriceRange] = useState([0, 500000]);
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");
//   const [sort, setSort] = useState("newest");
//   const [viewMode, setViewMode] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const perPage = 6;
//   const galleryRef = useRef(null);

//   const filtered = properties
//     .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
//     .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
//     .filter(p => (location ? p.location === location : true))
//     .filter(p => (type ? p.type === type : true))
//     .sort((a, b) =>
//       sort === "lowest"
//         ? a.price - b.price
//         : sort === "highest"
//         ? b.price - a.price
//         : b.id - a.id
//     );

//   const totalPages = Math.ceil(filtered.length / perPage);
//   const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".property-card").forEach((card, i) => {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             delay: i * 0.05,
//             duration: 0.6,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//             },
//           }
//         );
//       });
//     }, galleryRef);

//     return () => ctx.revert();
//   }, [paginated]);

//   return (
//     <div className="flex flex-col lg:flex-row p-6 lg:p-12">
//       <FilterSidebar
//         search={search}
//         setSearch={setSearch}
//         priceRange={priceRange}
//         setPriceRange={setPriceRange}
//         location={location}
//         setLocation={setLocation}
//         type={type}
//         setType={setType}
//         sort={sort}
//         setSort={setSort}
//         viewMode={viewMode}
//         setViewMode={setViewMode}
//       />

//       <div className="flex-1 space-y-6" ref={galleryRef}>
//         <div className={`grid ${viewMode === "grid" ? "md:grid-cols-3 sm:grid-cols-2 grid-cols-1" : "grid-cols-1"} gap-6`}>
//           {paginated.map(property => (
//             <div key={property.id} className="property-card">
//               <PropertyCard property={property} viewMode={viewMode} />
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-end mt-10 pr-6">
//   <div className="flex gap-2 bg-[#1a1a1a] p-2 rounded-full shadow-lg border border-gray-800">
//     {Array.from({ length: totalPages }, (_, i) => (
//       <button
//         key={i}
//         onClick={() => setCurrentPage(i + 1)}
//         className={`min-w-[36px] h-[36px] text-sm rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
//           currentPage === i + 1
//             ? "bg-white text-black shadow-md"
//             : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//         }`}
//       >
//         {i + 1}
//       </button>
//     ))}
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default PropertyListing;


import React, { useEffect, useRef, useState } from "react";
import { properties } from "../data/properties";
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropertyCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pagination from "./Pagination";

gsap.registerPlugin(ScrollTrigger);

const PropertyListing = () => {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const galleryRef = useRef(null);

  const filtered = properties
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => (location ? p.location === location : true))
    .filter(p => (type ? p.type === type : true))
    .sort((a, b) =>
      sort === "lowest"
        ? a.price - b.price
        : sort === "highest"
        ? b.price - a.price
        : b.id - a.id
    );

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const totalCount = filtered.length;
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, totalCount);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".property-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.05,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert();
  }, [paginated]);

  const handlePageInput = e => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-12 sticky top-[100px] h-fit">
      <FilterSidebar
        search={search}
        setSearch={setSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        sort={sort}
        setSort={setSort}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <div className="flex-1 space-y-6" ref={galleryRef}>
        <div
          className={`grid ${
            viewMode === "grid" ? "md:grid-cols-3 sm:grid-cols-2 grid-cols-1" : "grid-cols-1"
          } gap-6`}
        >
          {paginated.map(property => (
            <div key={property.id} className="property-card">
              <PropertyCard property={property} viewMode={viewMode} />
            </div>
          ))}
        </div>

       <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  totalCount={totalCount}
  rowsPerPage={rowsPerPage}
  setCurrentPage={setCurrentPage}
  setRowsPerPage={setRowsPerPage}
  handlePageInput={handlePageInput}
  startIndex={startIndex}
  endIndex={endIndex}
/>

      </div>
    </div>
  );
};

export default PropertyListing;
