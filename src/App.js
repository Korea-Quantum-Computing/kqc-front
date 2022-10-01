import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactusPage from './pages/contactus';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} exact />
          <Route path = "/contactus" element = {<ContactusPage/>} exact />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
