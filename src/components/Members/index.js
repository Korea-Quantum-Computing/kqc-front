import React from 'react';
import { 
  MembersContainer, 
  MembersWrapper, 
  MembersTitle,
  MembersLink,
  MemberIcon,
  BtnWrap
} from './MembersElements';

import { Button } from '../Aboutus/AboutusElements';
import baobab from '../../images/baobab.png';
// import hanwha from '../../images/hanwha.png';
import ibm from '../../images/members/ibm-logo.png';
import hines from '../../images/members/hines-logo.png';
import busan from '../../images/members/busan-logo.png';
import dongseoUniv from '../../images/members/dongseo-logo.png';

const MembersSection = ({ lightBg, }) => {

  return (
    <>
    <div style = {{display: 'flex', justifyContent: 'center', width: '100%', background: '#f7f8fa'}}>
      <MembersContainer lightBg = {lightBg} id = 'members'>
        <MembersTitle style = {{marginTop: '100px'}}>
          Partners
        </MembersTitle>
        <div style = {{display: 'flex', justifyContent: 'start'}}>

        <MembersWrapper>
          
          <MembersLink>
            < a href="https://www.ibm.com/quantum" target="_blank" rel="noreferrer">
              <MemberIcon name = "IBM" src = {ibm} ></MemberIcon>
            </a>
            < a href="https://www.busan.go.kr/index" target="_blank" rel="noreferrer">
              <MemberIcon style = {{}} name = "Busan" src = {busan} ></MemberIcon>
            </a>
            
            < a href="https://www.dongseo.ac.kr/kr/" target="_blank" rel="noreferrer">
              <MemberIcon name = "DongseoUniv" src = {dongseoUniv}></MemberIcon>
            </a>
            < a href="https://www.hines.com" target="_blank" rel="noreferrer">
            <MemberIcon name = "Heins" src = {hines}></MemberIcon>
            </a>
          </MembersLink>
        </MembersWrapper>
</div>
        <MembersTitle>
          Members
        </MembersTitle>
        <MembersWrapper>
          <MembersLink>
            <a href="http://www.baobabaibio.com/" target="_blank" rel="noreferrer">
              <MemberIcon name = "BaobabAiBio" src = {baobab} height = {100}></MemberIcon>
            </a>
          </MembersLink>
        </MembersWrapper>
        <div style = {{width: '100%'}}>
          <div style ={{width: '100%', marginTop: '40px'}}>
            <BtnWrap>
              <Button 
                href = '/membership'
                primary = { 1}
                dark = { 0 }
                dark_2 = { 1 }  
              >More detail</Button>
            </BtnWrap>
          </div>
        </div>
      </MembersContainer>
    </div>
      
    </>
  )
}

export default MembersSection;