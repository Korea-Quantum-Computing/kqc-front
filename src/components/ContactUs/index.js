import React, { useState, } from "react";
import {
  Icon,
  FormH1,
  FormP,
  FormContainer,
  MessageBoxContainer,
  MessageBoxWrapper,
  Container,
  Desc,
} from './ContactusElements';

import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [institution, setInstitution] = useState('');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');
  const handleFirstNameChange = (e) => {  // <- input값으로 text 변경 함수
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {  // <- input값으로 text 변경 함수
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {  // <- input값으로 text 변경 함수
    setEmail(e.target.value);
  };

  const handleJobTitleChange = (e) => {  // <- input값으로 text 변경 함수
    setJobTitle(e.target.value);
  };

  const handleInstitutionChange = (e) => {  // <- input값으로 text 변경 함수
    setInstitution(e.target.value);
  };

  const handleIndustryChange = (e) => {  // <- input값으로 text 변경 함수
    setIndustry(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = {
      from_name: 'KQC-Member-contact',
      to_name: 'KQC-support',
      firstName: firstName,
      lastName: lastName,
      email: email,
      jobTitle: jobTitle,
      institution: institution,
      industry: industry,
      message: message,
    }
    emailjs.send("kqc-contactus","template_ce7afrb", content, "WPY4BXL3zlPjYW7gG")
    .then((result) => {
        console.log(result.text);
        alert("Sent information Successfully!!");
    }, (error) => {
        console.log(error.text);
        alert("Can not send message!");
    });
  }

  
  return (
    <>
    <div style ={{display: 'flex', justifyContent: 'center'}}>
     <Container style = {{width: '1000px'}}>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
        <Icon to="/" >
          <img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo-blue.svg').default} alt='kqc-icon'/>
          KQC
        </Icon> 
        </div>
        <FormH1>Contact Us</FormH1>
        <FormP>
        If you are intered in enhancing your quantum readiness or applying quantum algorithm to your business, 
        we are always ready to help you. 
        </FormP>
        <FormP style = {{marginTop: '-20px'}}>
        Please fill out the form below so an KQC representative may contact you.
        </FormP>

        <FormContainer>
          {/* <div> */}
            <div>
              <div style = {{lineHeight: '2.5', display: 'flex', justifyContent: 'center'}}>
                <Form style = {{fontSize: '14px', width: '300px', }}>
                  <Form.Group className="mb-3" controlId="contact-1">
                    <Form.Label style = {{color: '#010606'}}>First Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"  onChange = {e => handleFirstNameChange(e)} />
                    <Form.Label style = {{color: '#010606'}}>Last Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange = {e => handleLastNameChange(e)} />
                    <Form.Label style = {{color: '#010606'}}>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange = {e => handleEmailChange(e)} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div>  
              <div style = {{lineHeight: '2.5', display: 'flex', justifyContent: 'center'}}>
                <Form style = {{fontSize: '14px', width: '300px', }}>
                  <Form.Group>
                  <Form.Label style = {{color: '#010606'}}>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Title" onChange = {e => handleJobTitleChange(e)} />
                    <Form.Label style = {{color: '#f010606ff'}}>Company/Institution *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Institution" onChange = {e => handleInstitutionChange(e)} />
                    <Form.Label style = {{color: '#010606'}}>Industry*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Industry" onChange = {e => handleIndustryChange(e)} />
                  </Form.Group>
                </Form>
              </div>
            </div>
            </FormContainer>

            
            <MessageBoxContainer>
            <p style = {{color:`#010606`, fontSize: `5px`, paddingLeft: '20px'}}>The field indicated with an asterisk(*) are required to complete this transaction: other fields are optional.</p>
              <MessageBoxWrapper>
                <Form style = {{width: '100%'}}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style = {{color: '#010606'}}>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} style = {{resize: 'none'}} onInput = {e => handleMessageChange(e)}/>
                  </Form.Group>
                </Form>
              </MessageBoxWrapper>
            </MessageBoxContainer>
            
            
          {/* </div> */}
        
          <Desc>
            <p style = {{color:`#010606`, fontSize: `18px`}}>KQC may use my contact data to keep me informed of products, services and offerings :</p>
            <p style = {{color:`#010606`, fontSize: `14px`, paddingLeft: `30px`, marginBottom:`-4px`}}>    ▶ By e-mail</p>
            <p style = {{color:`#010606`, fontSize: `14px`, paddingLeft: `30px`, marginTop: '10px', marginBottom: '20px'}}>    ▶ By phone</p>
            <p style = {{color:`#010606`, fontSize: `18px`, marginBottom:`20px`}}>By submitting this form, I acknowledge that I have read and understand the KQC Privacy Statement.</p>
            <p style = {{color:`#010606`, fontSize: `18px`}}>I accept the product terms and conditions of this registration form</p>
          </Desc>
          
          
          <div style = {{display:`flex`, justifyContent: `center`, marginTop: '30px', marginBottom: '50px'}}>
            <Button variant = 'dark' onClick = {handleSubmit} >Submit</Button>
          </div>
        
      </Container>
    </div>
      
    </>
  )
}

export default ContactUs;