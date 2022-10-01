import React from 'react'

import Icon1 from '../../images/clouding.svg';
import Icon2 from '../../images/community.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
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
          <ServicesH2>Provide cutting-edge Quantum Computing Service</ServicesH2>
          <ServicesP>
            Get premium access to Quantum Computers
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src = {Icon2} />
          <ServicesH2>Create & Support Quantum Eco-system</ServicesH2>
          <ServicesP>
            We collaborate on research & projects to enhance members' quantum-readiness and share knowledge
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;