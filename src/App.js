import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactusPage from './pages/contactus';
import OPenHousePage from './pages/openhouse';
import AboutusSection from "./components/Aboutus";
import ResourceSection from "./components/Resource";
import ResearchSection from './components/Research';
import { resourceObj } from "./components/Resource/Data";
import { aboutusObj } from "./components/Aboutus/Data";
import {researchObj} from "./components/Research/Data";
import News from './components/News';
import MemberShipPage from './pages/membership';
import CareersPage from './pages/careers';

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} exact />
          {/* <Route path = "/services" element = {<Services/>} exact /> */}
          <Route path = "/contactus" element = {<ContactusPage/>} exact />
          <Route path = "/news" element = {<News/>} exact />
          <Route path = "/research" element = {<ResearchSection {...researchObj}/>} exact />
          <Route path = "/aboutus" element = {<AboutusSection {...aboutusObj}/>} exact />
          <Route path = "/careers" element = {<CareersPage/>} exact />
          <Route path = "/resources" element = {<ResourceSection {...resourceObj}/>} exact />
          <Route path = "/membership" element = {<MemberShipPage/>} exact />
          <Route path = "/openhouse" element = {<OPenHousePage/>} exact />

        </Routes>
       
      </Router>
    </>
  );
}

export default App;
