import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

import bg from '../images/openhouse-bg.jpg'

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 0 30px;
  margin-top: 0;
  height: 1200px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0% , transparent 100%);
    z-index: 2;
  }
`;

const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgBg = styled.img`
  with: 100%;
  height: 100%;
  opacity: .5;
  display: flex;
  justify-content: center;
  object-fit: cover;
  background: #fff;
`;


const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: 'transparent';
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;


const OpenHousePage = () => {

  return (
    <>
    <Container>
      <Bg>
        <ImgBg src = { bg } />
      </Bg>
    <Content>
      <Icon to="/">KQC</Icon>
      <h1 style = {{color: '#363636', marginBottom: '30px', fontWeight: '700'}}>KQC Open house</h1>
      <div style ={{width: '1000px', fontSize: '18px', fontWeight: 'bold'}}>
        <p>IBM Quantum KQC Hub Busan, aiming to commercialize quantum computing and building an ecosystem in Korea, would like to host an Open House event.</p>
        <p>By bringing various domestic and foreign specialists, we will share global cases of quantum ecosystem and the current status of quantum computing in Korea.</p>
        <p>We invite everyone who is interested in quantum computing to this event.</p>
      </div>
      <div style = {{width: '800px', marginTop: '20px'}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Title</th>
              <th>Speaker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>09:30 ~ 10:00</td>
              <td>KQC Introduction</td>
              <td>Jay Kwon/Chairman, KQC</td>
            </tr>
            <tr>
              <td>2</td>
              <td>10:10 ~ 10:20</td>
              <td>Growing a successful quantum ecosystem</td>
              <td style = {{wordBreak: `break-all`}} >Aparna Prabhakar / Vice President, Partners and Alliances, IBM Quantum</td>
            </tr>
            <tr>
              <td>3</td>
              <td>10:20 ~ 10:40</td>
              <td>Human Resources Required for a Quantum Ecosystem</td>
              <td>Hakbae Lee / Professor, Yonsei University</td>
            </tr>
            <tr>
              <td>4</td>
              <td>10:40 ~ 11:00</td>
              <td>Research with JPMorgan Chase</td>
              <td>Nicolas Robles / Global System Integrator Lead, IBM Quantum</td>
            </tr>
            {/* <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      </div>
     
    </Content>
    </Container>
    <Footer />
      
    </>
  )
}

export default OpenHousePage;