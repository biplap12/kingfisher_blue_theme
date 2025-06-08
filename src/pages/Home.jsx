

import MapSection from '../Components/Home/MapSection.jsx';
import PaymentPlanSection from '../Components/Home/PaymentPlanSection.jsx';
import FloorPlanSelector from '../Components/Home/FloorPlanSelector.jsx';
import IconicProperties from '../Components/Home/IconicProperties.jsx';
import Whykingfisher from '../Components/Home/WhyKingFisher.jsx';
import AmenitiesSection from '../Components/Home/AmenitiesSection.jsx';
import Slider from '../Components/Home/Slider.jsx';
import Hero1 from '../Components/Home/BackgroundImageSection.jsx';
import Details from '../Components/Home/Details.jsx';
import Gallery from '../Components/Home/Gallery.jsx';
import PartnerLogos from '../Components/Partners/Associated-Partners.jsx';


const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero1/>
    <div className='mx-10'>
    <Details/>
    <Slider/>
    <Gallery/>
    <Whykingfisher/>
    <IconicProperties/>
    <AmenitiesSection/>
    <MapSection/>
    <PaymentPlanSection/>
    <FloorPlanSelector/>
    <PartnerLogos/>
    </div>
        
    </>
  )
}

export default Home
