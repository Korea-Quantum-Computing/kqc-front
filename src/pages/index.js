import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';

// import InfoSection from '../components/InfoSection';
import { researchObj } from "../components/Research/Data";
import { resourceObj } from "../components/Resource/Data";
import { aboutusObj } from "../components/Aboutus/Data";

import Services from '../components/Services';
import MembersSection from "../components/Members";
import Footer from '../components/Footer';
import ResearchSection from "../components/Research";
import ResourceSection from "../components/Resource";
import AboutusSection from "../components/Aboutus";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <HeroSection />
      <Services /> 
      <MembersSection />
      <ResearchSection {...researchObj}/> 
      <ResourceSection {...resourceObj}/>
      <AboutusSection {...aboutusObj}/>
      <Footer />
    
    </>
  )
}

export default Home;