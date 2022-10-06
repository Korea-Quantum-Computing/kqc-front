import React, { useState, } from "react";
import {
  Icon,
  FormH1,
  FormP,
  Container,
} from './ContactusElements';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [institution, setInstitution] = useState('')
  const [industry, setIndustry] = useState('')

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

  const handleSubmit = () => {
    console.log('=========')
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(jobTitle)
    console.log(institution)
    console.log(industry)
    console.log('=========')

  }

  
  return (
    <>
    <div style ={{display: 'flex', justifyContent: 'center'}}>
     <Container style = {{width: '1000px'}}>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
          <Icon to="/">KQC</Icon> 
        </div>
        <FormH1>Contact Us</FormH1>
        <FormP>
        If you are intered in enhancing your quantum readiness or applying quantum algorithm to your business, 
        we are always ready to help you. 
        </FormP>
        <FormP style = {{marginTop: '-20px'}}>
        Please fill out the form below so an KQC representative may contact you.
        </FormP>

        <div style = {{display: 'flex', width: '1000', justifyContent: 'center', marginTop: '10px'}}>
          <div>
            <div style ={{display: `flex`, flexDirection: `row`, justifyContent: 'center', }}>
              <div style = {{width: `400px`, marginRight: '50px', lineHeight: '2.5'}}>
                <Form style = {{fontSize: '14px'}}>
                  <Form.Group className="mb-3" controlId="contact-1">
                    <Form.Label style = {{color: '#fff'}}>First Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"  onChange = {e => handleFirstNameChange(e)} />
                    <Form.Label style = {{color: '#fff'}}>Last Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange = {e => handleLastNameChange(e)} />
                    <Form.Label style = {{color: '#fff'}}>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange = {e => handleEmailChange(e)} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </div>
              <div style = {{width: `400px`, lineHeight: '2.5'}}>
                <Form style = {{fontSize: '14px'}}>
                  <Form.Group>
                  <Form.Label style = {{color: '#fff'}}>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Title" onChange = {e => handleJobTitleChange(e)} />
                    <Form.Label style = {{color: '#fff'}}>Company/Institution *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Institution" onChange = {e => handleInstitutionChange(e)} />
                    <Form.Label style = {{color: '#fff'}}>Industry*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Industry" onChange = {e => handleIndustryChange(e)} />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <p style = {{color:`#fff`, fontSize: `5px`}}>The field indicated with an asterisk(*) are required to complete this transaction: other fields are optional.</p>
            
            <div style = {{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '10px', marginBottom: '30px'}}>
              <Form style = {{width: '850px'}}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style = {{color: '#fff'}}>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} style = {{resize: 'none'}}/>
                </Form.Group>
              </Form>
            </div>
            
            <p style = {{color:`#fff`, fontSize: `18px`}}>KQC may use my contact data to keep me informed of products, services and offerings :</p>
            <p style = {{color:`#fff`, fontSize: `14px`, paddingLeft: `30px`, marginBottom:`-4px`}}>    ㅁ By e-mail</p>
            <p style = {{color:`#fff`, fontSize: `14px`, paddingLeft: `30px`}}>    ㅁ By phone</p>
            <p style = {{color:`#fff`, fontSize: `18px`, marginBottom:`0px`}}>By submitting this form, I acknowledge that I have read and understand the KQC Privacy Statement.</p>
            <p style = {{color:`#fff`, fontSize: `18px`}}>I accept the product terms and conditions of this registration form</p>
            
            <div style = {{display:`flex`, justifyContent: `center`, marginTop: '30px', marginBottom: '50px'}}>
              <Button variant = 'light' onClick = {handleSubmit} >Submit</Button>
            </div>
          </div>
        </div>

        
      </Container>
    </div>
      
    </>
  )
}

export default ContactUs;