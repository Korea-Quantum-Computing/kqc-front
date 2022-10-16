import React from 'react';
import { 
  MembersContainer, 
  MembersWrapper, 
  MembersTitle,
  MembersLink,
  MemberIcon
} from './MembersElements';

import { Button, BtnWrap } from '../Aboutus/AboutusElements';
import baobab from '../../images/baobab.png';
// import hanwha from '../../images/hanwha.png';
import ibm from '../../images/logo_ibm.png';
import hines from '../../images/hines.png';
import busan from '../../images/busan.png';
import dongseoUniv from '../../images/dongseoUniv.png';

const MembersSection = ({ lightBg, }) => {

  return (
    <>
    <div style = {{display: 'flex', justifyContent: 'center', width: '100%', background: '#f7f8fa'}}>
      <MembersContainer lightBg = {lightBg} id = 'members'>
          <MembersWrapper>
            <MembersTitle style = {{marginTop: '100px'}}>
              Partners
            </MembersTitle>
            <MembersLink style = {{marginTop: '-160px'}}>
              < a href="https://www.ibm.com/quantum" target="_blank" rel="noreferrer">
                <MemberIcon name = "IBM" src = {ibm} width = {200} height = {100} ></MemberIcon>
              </a>
              < a href="https://www.busan.go.kr/index" target="_blank" rel="noreferrer">
                <MemberIcon style = {{marginLeft: '-20px', marginTop: '-12px', marginRight: '-20px'}} name = "Busan" src = {busan} width = {350} height = {350}></MemberIcon>
              </a>
              
              < a href="https://www.dongseo.ac.kr/kr/" target="_blank" rel="noreferrer">
                <MemberIcon name = "DongseoUniv" src = {dongseoUniv} width = {330} height = {90}></MemberIcon>
              </a>
              < a href="https://www.hines.com" target="_blank" rel="noreferrer">
              <MemberIcon style = {{marginTop: '1px'}} name = "Heins" src = {hines} width = {200} height = {200}></MemberIcon>
              </a>
            </MembersLink>
            <MembersTitle style = {{marginTop: '-70px'}}>
              Members
            </MembersTitle>
            <MembersLink style ={{marginTop: '-70px'}}>
            
            <a href="http://www.baobabaibio.com/" target="_blank" rel="noreferrer">
              <MemberIcon name = "BaobabAiBio" src = {baobab}  width = {300} height = {120}></MemberIcon>
            </a>

            {/* <a href="" target="_blank" rel="noreferrer"> 
              <MemberIcon name = "Hanhwa" src = {hanwha} width = {300} height = {100}></MemberIcon>
            </a> */}
            </MembersLink>
            <div style ={{marginTop: '40px'}}>
                  <BtnWrap>
                    <Button 
                      href = '/membership'
                      primary = { 1}
                      dark = { 0 }
                      dark_2 = { 1 }  
                    >More detail</Button>
                  </BtnWrap>
                </div>
          </MembersWrapper>
        </MembersContainer>
    </div>
      
    </>
  )
}

export default MembersSection;