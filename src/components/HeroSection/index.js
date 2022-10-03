import React from "react";
import Video from '../../videos/video.mp4';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroH2,
  HeroP, 
  HeroSP,
  // HeroBtnWrapper, 
  // ArrowForward, 
  // ArrowRight,
  HeroImgWrap,
  HeroImg,
} from './HeroElements';

import img from '../../images/qc_cc.png'


const HeroSection = () => {

  return (
    <HeroContainer id = "home">
      <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Be ready for the era of quantum</HeroH1>
        <HeroP>
          Quantum computing, a New Future of computing
        </HeroP>
        <HeroSP>
          Quantum computing harnesses the phenomena of quantum mechanics to deliver a huge leap forward in computation to solve certain problems.
        </HeroSP>
        <HeroSP>
          You need to be embraced to new paradigm and potential of quantum computing.
          Your small step today will make huge difference in the future.
        </HeroSP>
        <div style = {{width: `100%`, display: 'flex', justifyContent: 'start', marginTop: '50px'}}>
          <HeroH2>Why Quantum Computer?</HeroH2>
        </div>
        
        <HeroImgWrap>
          <HeroImg src = {img} alt = 'intro'/>
        </HeroImgWrap>
        <div style = {{display: 'flex', justifyContent: 'flex-start', width: '800px'}}>
          <p style ={{color: '#fff'}}>
            Despite how sophisticated digital computing has become, there are many scieitific and business problems for which we've barely scratched the surface
          </p>
        </div>
        
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection;