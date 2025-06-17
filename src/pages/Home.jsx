import MapSection from "../Components/Home/MapSection.jsx";
import PaymentPlanSection from "../Components/Home/PaymentPlanSection.jsx";
import FloorPlanSelector from "../Components/Home/FloorPlanSelector.jsx";
import IconicProperties from "../Components/Home/IconicProperties.jsx";
import Whykingfisher from "../Components/Home/WhyKingFisher.jsx";
import AmenitiesSection from "../Components/Home/AmenitiesSection.jsx";
import Slider from "../Components/Home/Slider.jsx";
import Hero1 from "../Components/Home/BackgroundImageSection.jsx";
import Details from "../Components/Home/Details.jsx";
import Gallery from "../Components/Home/Gallery.jsx";
import PartnerLogos from "../Components/Partners/Associated-Partners.jsx";
import Sticky from "../Components/Home/Sticky.jsx";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {});
  const text = [
    {
      title: "Our Story",
      description:
        "Framed by a stunning ocean panorama, Kingfisher’s newest landmark on Dubai Islands captures the essence of refined coastal living. Nestled along the marina, this exceptional development offers a seamless blend of tranquility, energy, and connectivity—where every feature is thoughtfully designed to elevate modern lifestyles.",
      images: [
        "/gallery/img1.jpg",
        "/gallery/img2.jpg",
        "/gallery/img3.jpg",
        "/gallery/img4.jpg",
        "/gallery/img5.jpg",
        "/gallery/img6.jpg",
        "/gallery/img7.jpg",
      ],
    },
  ];
  return (
    <>
      {/* <Navbar/> */}
      <section data-theme="light" className="min-h-screen">
        <Hero1 />
      </section>
      <section data-theme="dark" className="">
        <Details />
      </section>
      <div className="sticky top-0">
        <Sticky />
      </div>
      <section>
        <Slider
          title={text[0].title}
          description={text[0].description}
          images={text[0].images}
        />
      </section>
      <section className="min-h-screen">
        <Gallery />
      </section>
      <section className="min-h-screen">
        <Whykingfisher />
      </section>
      <section className="min-h-screen">
        <IconicProperties />
      </section>
      <section className="min-h-screen">
        <AmenitiesSection />
      </section>
      <section className="min-h-screen">
        <MapSection />
      </section>
      <section className="min-h-screen">
        <PaymentPlanSection />
      </section>
      <section className="min-h-screen">
        <FloorPlanSelector />
      </section>
      <section className="min-h-screen">
        <PartnerLogos />
      </section>
    </>
  );
};

export default Home;
