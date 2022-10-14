import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import { aboutusObj } from "../components/Aboutus/Data";
import Services from '../components/Services';
import MembersSection from "../components/Members";
import Footer from '../components/Footer';
import AboutusSection from "../components/Aboutus";
import RecentNews from '../components/RecentNews';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggle = {toggle}/>
      {/* <Sidebar isOpen = {isOpen} toggle = {toggle}/> */}
      <HeroSection />
      <AboutusSection {...aboutusObj}/>
      <Services /> 
      <MembersSection />
      <RecentNews/>      
      <Footer />
    
    </>
  )
}

export default Home;