import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../images/membership.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Icon = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #999;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;

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
  width: 1000px;
  min-height: 500px;
  overflow: hidden;
  z-index: -1
`;

export const ImgBg = styled.img`
  object-fit: fill;
  z-index: 999
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 1200px;
  background: #¸;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
`;

const MemberShipPage = () => {

  return (
    <>
    <div style ={{display: 'flex', justifyContent: 'center'}}>
      
    <Container style = {{width: '1000px'}}>
      
    <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
      <Icon to="/">KQC</Icon> 
    </div>
    <div style ={{display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '800px', width: '100%'}}>
      <h1 style = {{fontSize: '2.5rem', fontWeight: 'bold', marginTop: '30px'}}>Prepare Quantum Era with KQC</h1>
      <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Row style ={{display: 'flex', justifyContent: 'center', width: '800px'}}>
          <Col style ={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} md = {8}>
            <h1>AAA</h1>
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
            <h1>BBB</h1>
          </Col>
        </Row>
      </div>
      <div style = {{marginTop: '40px'}}>
        <h1 style = {{fontSize: '2.5rem', fontWeight: 'bold'}}>Membership Benefits</h1> 
      </div>
      
      <BG>
        <ImgBg src = { bg } />
      </BG>
      <h1>BB</h1>
    </div>
  </Container>
      
    </div>
    <Footer/>
    </>
  )
}

export default MemberShipPage;