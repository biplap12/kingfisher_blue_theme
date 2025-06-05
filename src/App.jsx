import { Outlet } from "react-router"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"


function App() {

  return (
    <>
      <Navbar/>
      <main className='min-h-[78vh]'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
