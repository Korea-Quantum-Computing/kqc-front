import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../images/membership.svg';


import ScrollToTop from '../components/ContactUs/ScrollToTop';
import Careers from '../components/Careers';


const CareersPage = () => {

  return (
    <>
    <ScrollToTop />
    <Careers/>
    <Footer/>
    </>
  )
}

export default CareersPage;