import React from 'react';
import ContactUs from '../components/ContactUs';
import ScrollToTop from '../components/ContactUs/ScrollToTop';
import Footer from '../components/Footer';

const ContactusPage = () => {

  return (
    <>
      <ScrollToTop />
      <ContactUs/>
      <Footer />
    </>
  )
}

export default ContactusPage;