import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactusPage from './pages/contactus';
import OPenHousePage from './pages/openhouse';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {



  return (
    <>
      <Router>

        <Routes>
          <Route path = "/" element = {<Home/>} exact />
          <Route path = "/contactus" element = {<ContactusPage/>} exact />
          <Route path = "/openhouse" element = {<OPenHousePage/>} exact />

        </Routes>
       
      </Router>
    </>
  );
}

export default App;
