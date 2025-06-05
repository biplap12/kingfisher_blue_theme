
import Hero1 from '../components/Hero1.jsx'
import Hero2 from '../components/Hero2.jsx'
import Hero4 from '../Components/Hero4.jsx'
import MapSection from '../Components/MapSection.jsx';
import PaymentPlanSection from '../Components/PaymentPlanSection.jsx';
import FloorPlanSelector from '../Components/FloorPlanSelector.jsx';
import IconicProperties from '../Components/IconicProperties.jsx';
import Whykingfisher from '../Components/WhyKingFisher.jsx';
import AmenitiesSection from '../Components/Hero5.jsx';
import Gallery from '../Components/Gallery.jsx';


const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero1/>
    <div className='mx-10'>
    <Hero2/>
    <Gallery/>
    <Hero4/>
    <Whykingfisher/>
    <IconicProperties/>
    <AmenitiesSection/>
    <MapSection/>
    <PaymentPlanSection/>
    <FloorPlanSelector/>
    </div>
        
    </>
  )
}

export default Home
