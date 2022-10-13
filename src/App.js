import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactusPage from './pages/contactus';
import OPenHousePage from './pages/openhouse';
import AboutusSection from "./components/Aboutus";
import NewsSection from "./components/NewsSection";
import ResearchSection from './components/Research';
import { newsObj } from "./components/NewsSection/Data";
import { aboutusObj } from "./components/Aboutus/Data";
import {researchObj} from "./components/Research/Data";
import News from './components/News';
import MemberShipPage from './pages/membership';
import CareersPage from './pages/careers';
import AboutUsPage from './pages/aboutus-detail';

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} exact />
          {/* <Route path = "/services" element = {<Services/>} exact /> */}
          <Route path = "/contactus" element = {<ContactusPage/>} exact />
          <Route path = "/news" element = {<News/>} exact />
          <Route path = "/aboutus-detail" element = {<AboutUsPage/>} exact />
          <Route path = "/research" element = {<ResearchSection {...researchObj}/>} exact />
          <Route path = "/aboutus" element = {<AboutusSection {...aboutusObj}/>} exact />
          <Route path = "/careers" element = {<CareersPage/>} exact />
          <Route path = "/recent-news" element = {<NewsSection {...newsObj}/>} exact />
          <Route path = "/membership" element = {<MemberShipPage/>} exact />
          <Route path = "/openhouse" element = {<OPenHousePage/>} exact />

        </Routes>
       
      </Router>
    </>
  );
}

export default App;
