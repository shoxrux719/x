import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import ChooseDirection from "../Pages/ChooseDirection";
import AboutUs from "../Pages/AboutUs";
import Commpany from "../Pages/Commpany";
import ONlineCourses from "../Pages/ONlineCourses";
import Sales from "../Pages/Sales";
import { FloatButton } from "antd";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Python from "../Pages/Cours/Python";
import Ai from '../Pages/Cours/Ai'
import Company from "../Pages/Company";
import SMM from "../Pages/Cours/SMM";
import RegisterPage from "../Pages/Register";
import RegistrationForm from "../Pages/AboutUs";
import ChooseDirectionUzb from "../UZB/ChooseDirection";
import HomeUZ from "../UZB/Home";
import RegistrationFormUz from "../UZB/AboutUs";
import PythonUz from "../UZB/Kurslar/Python";
import Frontend from "../Pages/Cours/Front-end";
import Graphic from "../Pages/Cours/Graphic";
import CompanyUz from "../UZB/Company";
import CyberSecurity from "../Pages/Cours/CyberSec";
import NetBackend from "../Pages/Cours/NetBackend";
import Motion from "../Pages/Cours/Motion";
import Frontenduz from "../Pages/Cours/Front-end";
import NetBackendUz from "../UZB/Kurslar/NetBackend";
import GraphicUz from "../UZB/Kurslar/Graphic";
import MotionUz from "../UZB/Kurslar/Motion";
import SMMUz from "../UZB/Kurslar/SMM";
import AiUz from "../UZB/Kurslar/Ai";
import CyberSecurityUz from "../UZB/Kurslar/CyberSec";
import React from "react";
import Snowfall from "react-snowfall";
import NotFound from "../Pages/NotFound";

const Routers = () => {
  const [navbarIsActive, setNavbarIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const activePaths = [
      "/python",
      "/pythonuz",
      "/company",
      "/register",
      "/",
      "/Uz",
      "/front",
      "/graphic",
      "/cybersecuritu",
      "/ai",
      "/smm",
      "/netbackend",
      "/motion",
      "/frontuz",
      "/graphicuz",
      "/cybersecurituuz",
      "/aiuz",
      "/SMMuz",
      "/netbackenduz",
      "/motionuz"
    ];
    setNavbarIsActive(activePaths.includes(location.pathname));
  }, [location]);




  return (
    <>


      {/* Background with animated lines */}
     
        <Snowfall classname="z-999" colors={["#ffffff", "#ff9999", "#66ccff"]} snowflakeCount={150} />


      <div className="max-w-[1440px] mx-auto my-0">
        {navbarIsActive && <Navbar/>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uz" element={<HomeUZ />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/commpany" element={<Commpany />} />
          <Route path="/company" element={<Company />} />
          <Route path="/companyuz" element={<CompanyUz />} />
          <Route path="/online" element={<ONlineCourses />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/python" element={<Python />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ChooseDirection" element={<ChooseDirection />} />
          <Route path="/ChooseDirectionUz" element={<ChooseDirectionUzb />} />
          <Route path="/RegistrationFormUz" element={<RegistrationFormUz />} />

          <Route path="/front" element={<Frontend />} />
          <Route path="/backend" element={<Python />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/smm" element={<SMM />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/netbackend" element={<NetBackend />} />
          <Route path="/cybersecuritu" element={<CyberSecurity />} />

          <Route path="/Pythonuz" element={<PythonUz />} />

          <Route path="/frontuz" element={< Frontenduz/>} />
          <Route path="/Netbackenduz" element={<NetBackendUz />} />
          <Route path="/Graphicuz" element={<GraphicUz />} />
          <Route path="/Motionuz" element={<MotionUz />} />
          <Route path="/SMMuz" element={<SMMUz />} />
          <Route path="/Aiuz" element={<AiUz />} />
          <Route path="/cybersecurituuz" element={<CyberSecurityUz />} />




          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
       
      </div>

      
      
        {navbarIsActive && <Footer />}
        <FloatButton.BackTop />
    </>
  );
};

export default Routers;
