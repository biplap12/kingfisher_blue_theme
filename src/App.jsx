import { Outlet } from "react-router";
import Navbar from "./Components/Header/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import useThemeObserver from "./hook/useThemeObserver.js";

function App() {
  useThemeObserver();

  return (
    <>
      <Navbar />
      <main className="min-h-[78vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
