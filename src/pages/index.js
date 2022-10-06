import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import { resourceObj } from "../components/Resource/Data";
import { aboutusObj } from "../components/Aboutus/Data";
import Services from '../components/Services';
import MembersSection from "../components/Members";
import Footer from '../components/Footer';
import ResourcesSection from "../components/Resource";
import AboutusSection from "../components/Aboutus";

import { articles } from '../data/articles';
import { Button , BtnWrap } from '../components/Aboutus/AboutusElements';

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
      <AboutusSection {...aboutusObj}/>
      <Services /> 
      <MembersSection />
      <div id = 'resources' style = {{width: '100%', height: '600px', display: 'flex', justifyContent: 'center',}}>
        < div style = {{width: '1100px'}}>
            <h1 style = {{fontSize: '2.5rem', fontWeight: 700, marginTop: '50px', marginBottom: '50px'}}>Recent News</h1>
          <ResourcesSection nRows = {1} nCols = {3} data = {articles} image = {false}/>
          <div style = {{width: '1100px', marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
            <BtnWrap>
              <Button 
                href = '/news'
                primary = { 1}
                dark = {0 }
                dark_2 = { 1 }  
              >
                Read More
              </Button>
            </BtnWrap>
          </div>         
        </div>
        

      </div>
      
      <Footer />
    
    </>
  )
}

export default Home;