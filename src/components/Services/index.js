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

import Button from 'react-bootstrap/Button'

const Services = () => {
  return (
    <ServicesContainer id = "services">
      <ServicesH1>
        Our  Services
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src = {accessImage} />
          <ServicesH2>QC Access Service</ServicesH2>
          <div style = {{height: '120px'}}>
            <ServicesP>
              Get premium access to cutting-edge IBM-powered quantum computers
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
          <ServicesIcon src = {educationImage} />
          <ServicesH2>Education Service</ServicesH2>
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

        <ServicesCard>
          <ServicesIcon src = {researchImage} />
          <ServicesH2>Research Program</ServicesH2>
          <div style = {{height: '120px'}}>
            <ServicesP>
              As a research-based Company, we colloaborate on go-to market research projects with our members
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
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;


// on research & projects to enhance members' quantum-readiness and share knowledge