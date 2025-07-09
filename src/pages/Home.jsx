import MapSection from "../Components/Home/MapSection.jsx";
// import PaymentPlanSection from "../Components/Home/PaymentPlanSection.jsx";
import FloorPlanSelector from "../Components/Home/FloorPlanSelector.jsx";
import IconicProperties from "../Components/Home/IconicProperties.jsx";
import Whykingfisher from "../Components/Home/WhyKingFisher.jsx";
// import GallerySlider from "../Components/PropertyDetails/slider.jsx";
import Hero1 from "../Components/Home/BackgroundImageSection.jsx";
import Gallery from "../Components/Home/Gallery.jsx";
import PartnerLogos from "../Components/Partners/Associated-Partners.jsx";
// import { useEffect, useState } from "react";
// import api from "../services/api.js";
import Home1 from "../Components/Home/home.jsx";

import OurStorySlider from "../Components/Home/OurStorySlider.jsx";
import AbcPage from "../Components/abc.jsx";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <section data-theme="light" className="min-h-screen relative">
        {/* <Hero1 /> */}
        <Home1/>
        {/* <div className="absolute lg:-bottom-20 -bottom-30  left-1/2  transform -translate-x-1/2 ">
          <AbcPage />
        </div> */}
      </section>

      {/* <section className="min-h-screen" id="our-story">
        <OurStorySlider
          // title={text[0].title}
          // description={text[0].description}
          // images={galleryData || []}
          // loading={loading}
        />
      </section> */}
      <section>
        <Gallery />
      </section>
      <section>
        <Whykingfisher />
      </section>
      <section>
        <IconicProperties />
      </section>

      <section>
        <MapSection />
      </section>
      {/* <section >
        <PaymentPlanSection />
      </section> */}
      <section>
        <FloorPlanSelector />
      </section>
      <section>
        <PartnerLogos />
      </section>
    </>
  );
};

export default Home;
