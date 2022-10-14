import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../images/membership.svg';


import ScrollToTop from '../components/ContactUs/ScrollToTop';
import Careers from '../components/Careers';
import AboutusDetail from '../components/Aboutus-detail';


const AboutUsPage = () => {

  return (
    <>
    <ScrollToTop />
    <AboutusDetail/>

    <Footer/>
    </>
  )
}

export default AboutUsPage;