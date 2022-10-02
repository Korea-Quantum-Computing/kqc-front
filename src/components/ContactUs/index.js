import React from "react";
import {
  Icon,
  FormH1,
  FormP,
  Container,
} from './ContactusElements';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <>
      <Container>
        <Icon to="/">KQC</Icon> 
        <FormH1>Contact Us</FormH1>
        <FormP>
        If you are intered in enhancing your quantum readiness or applying quantum algorithm to your business, 
        we are always ready to help you. 
        </FormP>
        <FormP>
        Please fill out the form below so an KQC representative may contact you.
        </FormP>

        <div style = {{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
          <div>
            <div style ={{display: `flex`, flexDirection: `row`}}>
              <div style = {{width: `400px`, paddingRight: '50px'}}>
                <Form>
                  <Form.Group className="mb-3" controlId="contact-1">
                    <Form.Label style = {{color: '#fff'}}>First Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                    <Form.Label style = {{color: '#fff'}}>Last Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                    <Form.Label style = {{color: '#fff'}}>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </div>
              <div style = {{width: `400px`}}>
                <Form>
                  <Form.Group>
                  <Form.Label style = {{color: '#fff'}}>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Title" />
                    <Form.Label style = {{color: '#fff'}}>Company/Institution *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Institution" />
                    <Form.Label style = {{color: '#fff'}}>Industry*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Industry" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <p style = {{color:`#fff`, fontSize: `5px`}}>The field indicated with an asterisk(*) are required to complete this transaction: other fields are optional.</p>
            <p style = {{color:`#fff`, fontSize: `18px`}}>KQC may use my contact data to keep me informed of products, services and offerings :</p>
            <p style = {{color:`#fff`, fontSize: `14px`, paddingLeft: `30px`, marginBottom:`-4px`}}>    ㅁ By e-mail</p>
            <p style = {{color:`#fff`, fontSize: `14px`, paddingLeft: `30px`}}>    ㅁ By phone</p>
            <p style = {{color:`#fff`, fontSize: `18px`, marginBottom:`0px`}}>By submitting this form, I acknowledge that I have read and understand the KQC Privacy Statement.</p>
            <p style = {{color:`#fff`, fontSize: `18px`}}>I accept the product terms and conditions of this registration form</p>
            
            <div style = {{display:`flex`, justifyContent: `center`, marginTop: '30px'}}>
              <Button variant = 'light'>Submit</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactUs;