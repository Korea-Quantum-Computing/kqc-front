import React from "react";
import Video from '../../videos/video_hero.mp4';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroSP,
} from './HeroElements';


const HeroSection = () => {

  return (
    <HeroContainer id = "home">
      <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Be ready for the era of quantum</HeroH1>
        
          <HeroSP style ={{marginTop: '25px'}}>
            Quantum computing harnesses the phenomena of quantum mechanics
          </HeroSP>
          <HeroSP style ={{marginTop: '-15px'}}>
            to deliver a huge leap forward in computation to solve certain problems.
          </HeroSP>
          <HeroSP >
            You need to be embraced to new paradigm and potential of quantum computing.
          </HeroSP>
          <div style = {{display:'flex', justifyContent: 'center', marginTop: '50px'}}>
            <h2 style = {{color:'#fff', fontWeight: '700'}}>"Out of the lab into the real world"</h2>
          </div>
        
        
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection;