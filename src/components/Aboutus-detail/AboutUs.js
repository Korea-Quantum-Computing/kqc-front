import { MissionPanel, MissionImg, TargetImg, MissionHeader } from './AboutusDetailElements';

const AboutUs = () => {

  return (
    <>
    <MissionHeader>We have three main services</MissionHeader> 
    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

    
    <MissionPanel>
        <MissionImg src = {require('../../images/education.png')} alt = 'education'/>
        <MissionImg src = {require('../../images/research.png')} alt = 'research'/>
        <MissionImg src = {require('../../images/access.png')} alt = 'acccess'/>
    </MissionPanel>
    <TargetImg src = {require('../../images/target.png')} alt = 'target'/>
    </div>
    <div>
      
    </div>
    </>
  )
}


export default AboutUs;