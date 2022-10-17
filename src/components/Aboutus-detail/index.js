
import React from 'react';

import { 
  AboutusContainer, 
  AboutusContent,
  Bg,
  VideoBg,
  Icon,
  TimeLine,
  TimeLineImg,
 } from './AboutusDetailElements';

 import Video from '../../videos/video_office.mp4';
import Tabs from './Tabs';


const AboutusDetail = () => {
  return (
    <>
     <AboutusContainer id = "aboutus-detail">
      <AboutusContent>
        <div style ={{display: 'flex', justifyContent: 'start', width: '100%', height: '80px'}}>
          <Icon to="/" >
            <img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo.svg').default} alt = 'kqc-logo'/>
            KQC
          </Icon> 
        </div>
        <TimeLine>
            <TimeLineImg  src = {require('../../images/kqc-history-small.png')} alt = 'kqc-history'/>
        </TimeLine>
        <div style = {{display: 'flex', justifyContent: 'center', minHeight: '100px'}}>
          <Tabs/>
        </div>
        
      </AboutusContent>
      <Bg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
      </Bg>
    </AboutusContainer>
      
    </>
  )
}

export default AboutusDetail;