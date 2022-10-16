
import React from 'react';

import { 
  AboutusContainer, 
  AboutusContent,
  Bg,
  VideoBg,
  Icon,
 } from './AboutusDetailElements';

 import Video from '../../videos/video_office.mp4';
import Tabs from './Tabs';


const AboutusDetail = () => {
  return (
    <>
     <AboutusContainer id = "aboutus-detail">
      <AboutusContent>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
          <Icon to="/" >
            <img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo.svg').default} alt = 'kqc-logo'/>
            KQC
          </Icon> 
        </div>
        <div style = {{color: 'white', height: '400px', display: 'flex', alignItems: 'center'}}>
          <div style = {{color: 'white', }}>
            <img style = {{color: 'white', width: '100%'}} src = {require('../../images/kqc-history-small.png')} alt = 'kqc-history'/>
          </div>
        </div>
        <div style = {{background: 'red', minHeight: '600px'}}>
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