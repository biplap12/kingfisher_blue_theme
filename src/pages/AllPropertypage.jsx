import React, { useContext, useEffect, useRef } from 'react';
import PropertyCard from '../Components/Property-card/PropertyCard';
import { MenuContext } from '../state/ContextMenu';
import { useInView } from 'framer-motion';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

const AllPropertypage = () => {
  const divRef = useRef(null);
  const { setMenuColor } = useContext(MenuContext);
  const isVisible = useInView(divRef, { once: false });

  useEffect(() => {
    setMenuColor("dark");
  }, [isVisible]);

  return (
    <>
      <div
        className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 lightSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          fontFamily: `'Wellsbrook Initials SG Regular'`,
          height: "75vh",
          padding: "0 50px"
        }}
      >
        {/* Black overlay at 80% */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p className="text-6xl font-bold tracking-wide uppercase leading-20 heading-font">
            ALL Properties
          </p>
           <Breadcrumbs />
        </div>
       
      </div>

      {/* Property cards */}
      <PropertyCard />
    </>
  );
};

export default AllPropertypage;
