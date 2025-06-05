import React from 'react'
import PropertyListing from '../Components/PropertyList'


const AllPropertypage = () => {
  return (
    <>
    <div
      className="relative w-full h-screen bg-cover bg-center text-white -mt-25"
      style={{
        backgroundImage: 'url("/property/property.jpg")',
        fontFamily: `'Wellsbrook Initials SG Regular'`,
      }}
    >
      {/* Center Text */}
      <div className="absolute top-1/2 text-6xl font-bold  tracking-wide uppercase leading-20 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6  main-text">
         <p>ALL Properties</p>
      </div>
    </div>
    <PropertyListing/>

</>  );
};

export default AllPropertypage;
