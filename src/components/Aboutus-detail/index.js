
import React, { useState } from 'react';

import { 
  AboutusContainer, 
  AboutusContent,
  Bg,
  VideoBg,
  Icon,
 } from './AboutusDetailElements';

 import Video from '../../videos/video.mp4';
import Tabs from './Tabs';


const AboutusDetail = () => {
  return (
    <>
     <AboutusContainer id = "aboutus-detail">
      <AboutusContent>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
          <Icon to="/" >
            <img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo.svg').default}/>
            KQC
          </Icon> 
        </div>
        <div style = {{color: 'white'}}>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>

        </div>
        <div style = {{background: 'red'}}>
          <Tabs/>
        </div>
        
      </AboutusContent>
      <Bg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
      </Bg>
      <div>
      
      </div>
    </AboutusContainer>
      
    </>
  )
}

export default AboutusDetail;