import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import "./App.scss";
import Menu from "./components/Navbar/Menu";

function App() {
  const [openmenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Navbar openmenu={openmenu} setOpenMenu={setOpenMenu} />
      <Menu openmenu={openmenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Header />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
