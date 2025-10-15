import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Projects from "./Pages/Projects"; // if you have a base projects page

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HashRouter basename="/MDS-app_React/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/Residential" element={<Residential />} />
        <Route path="/Projects/Commercial" element={<Commercial />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
