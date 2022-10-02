import React from 'react'

import Icon1 from '../../images/clouding.svg';
import Icon2 from '../../images/community.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  BtnWrap,
  Button
} from './serviceElements';


const Services = () => {
  return (
    <ServicesContainer id = "services">
      <ServicesH1>
        Our  Services
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src = {Icon1} />
          <ServicesH1>QC Access Service</ServicesH1>
          <ServicesP>
            Get premium access to cutting-edge IBM-powered quantum computers
          </ServicesP>
          <BtnWrap>
                <Button 
                  to="home"
                  big = {false}
                  smooth = {true}
                  duration = {500}
                  spy = {true}
                  exact = 'true'
                  offset = {-80}
                  primary = { 1 }
                  dark = { 1 }
                  dark_2 = { 0 }  
                >More Info</Button>
              </BtnWrap>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src = {Icon2} />
          <ServicesH1>QC Education</ServicesH1>
          <ServicesP>
            We support quantum community by maintaining HR pipeline throguh education
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;


// on research & projects to enhance members' quantum-readiness and share knowledge