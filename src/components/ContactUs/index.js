import React from "react";
import {
  Icon,
  FormH1,
  FormP,
} from './ContactusElements';

import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <>
      <Icon to="/">KQC</Icon>

      <FormH1>Contact Us</FormH1>
      <FormP>
      If you are intered in enhancing your quantum readiness or applying quantum algorithm to your business, 
      we are always ready to help you. 
      </FormP>
      <FormP>
      Please fill out the form below so an KQC representative may contact you.
      </FormP>
      <h1>Will put contact form...</h1>
    </>
  )
}

export default ContactUs;