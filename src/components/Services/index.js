import React from 'react'

import accessImage from '../../images/clouding.svg';
import educationImage from '../../images/community.svg';
import researchImage from '../../images/research.webp';

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  BtnWrap
} from './serviceElements';

import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
    <ServicesContainer id = "services">
      <div>
        <ServicesH1 style = {{marginLeft: '150px'}}>
          Our Services
        </ServicesH1>
        <div style ={{
          display: 'flex', 
          // borderRadius: '20px',
          justifyContent: 'center', 
          alignItems: 'center',
          height: '80px', 
          width: '1000px', 
          color: '#fff', 
          background: '#0b2865', 
          fontSize: '30px', 
          fontWeight: '700',
          marginLeft: '200px',
          marginRight: '200px',
          marginBottom: '20px'
        }}>
          KQC as Research-based Company
        </div>

        <ServicesWrapper>
          <ServicesCard >
            <ServicesIcon style = {{marginTop: '-15px'}} src = {researchImage} />
            <ServicesH2>Membership</ServicesH2>
            <div style = {{height: '120px'}}>
              <ServicesP style = {{marginTop: '-1px'}} >
              As a research-based Company, we colloaborate on go-to market research projects with our members
              </ServicesP>
            </div>
            <BtnWrap>
              <Button 
                variant = 'dark'
                id = 'access-button'
                onClick = {() => {console.log('button clicked...')}}
              >
                More Info
              </Button>
            </BtnWrap>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src = {accessImage} />
            <ServicesH2>Cloud Access</ServicesH2>
            <div style = {{height: '120px'}}>
              <ServicesP>
                Get premium access to cutting-edge IBM-powered quantum computers
              </ServicesP>
            </div>
            <Button 
                variant = 'dark'
                id = 'community-button'
                onClick = {() => {console.log('button clicked...')}}
              >
                More Info
              </Button>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src = {educationImage} />
            <ServicesH2>Education</ServicesH2>
            <div style = {{height: '120px'}}>
              <ServicesP>
              We provide education service to support quantum community by maintaining HR pipeline 
              </ServicesP>
            </div>
            
            <BtnWrap>
              <Button 
                variant = 'dark'
                id = 'access-button'
                onClick = {() => {console.log('button clicked...')}}
              >
                More Info
              </Button>
            </BtnWrap>
          </ServicesCard>

          
        </ServicesWrapper>
      </div>
      
    </ServicesContainer>
  )
}

export default Services;


// on research & projects to enhance members' quantum-readiness and share knowledge