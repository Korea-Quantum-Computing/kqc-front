import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../images/membership.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ScrollToTop from '../components/ContactUs/ScrollToTop';

const Icon = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: "Audiowide";
  color: #0b2865;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #0b2865;
  }
  

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
const BG = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 1000px;
  // min-height: 500px;
  overflow: hidden;
  z-index: -1
`;

export const ImgBg = styled.img`
  object-fit: fill;
  z-index: 999;
  max-width: 900px;

  @media screen and (max-width: 480px) {
    max-width: 400px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
  background: #f7f8fa;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-size: 2.5rem; 
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

// display: flex;
// justify-content: center;
// margin-bottom: 20px;


const MemberShipPage = () => {

  return (
    <>
    <ScrollToTop />
    <div style ={{display: 'flex', justifyContent: 'center', background: '#f7f8fa'}}>
      
    <Container style = {{maxWidth: '1000px'}}>
      
    <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
      <Icon to="/" ><img style = {{marginRight: '-10px'}} src = {require('../images/kqc-logo-blue.svg').default} alter = 'kqc-logo'></img>KQC</Icon> 
    </div>
    <div style ={{minHeight: '1000px', width: '100%'}}>
      <H1>Prepare Quantum Era with KQC</H1>
      <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Row style ={{display: 'flex', justifyContent: 'center', maxWidth: '1000px'}}>
          <Col style ={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px'}} md = {8}>
            <p>
              The risk of doing nothing is far greater than the cost of being the first mover.
            </p>
            <p>
              Quantum Technology is advancing faster than you expected And commercially applicable solutions will be available in a few years from now
            </p>
            <p>
             If you are interested in enhancing your quantum readiness or applying quantum technologies to your business, we are always ready to help you.
            </p>
          </Col>
          <Col md = {4}>
            <img style = {{width: '100%', marginLeft: '-20px'}} src = {require('../images/membership-1.png')} alter = 'membership-1'/>
          </Col>
        </Row>
      </div>
      <div style = {{marginTop: '40px'}}>
        <H1>Membership Benefits</H1> 
      </div>
      <BG style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ImgBg src = { bg } alter = 'bg' />
      </BG>
    </div>
  </Container>
      
    </div>
    <Footer/>
    </>
  )
}

export default MemberShipPage;