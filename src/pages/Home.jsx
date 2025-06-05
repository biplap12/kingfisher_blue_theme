import Hero1 from "../components/Hero1.jsx";
import Hero2 from "../components/Hero2.jsx";
import Hero4 from "../Components/Hero4.jsx";
import PaymentPlanSection from "../Components/PaymentPlanSection.jsx";
import FloorPlanSelector from "../Components/FloorPlanSelector.jsx";
import Whykingfisher from "../Components/WhyKingFisher.jsx";
import Gallery from "../Components/Gallery.jsx";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero1 />
      <div>
        <Hero2 />
        <Gallery />
        <Hero4 />
        <Whykingfisher />
        <PaymentPlanSection />
        <FloorPlanSelector />
      </div>
    </>
  );
};

export default Home;
