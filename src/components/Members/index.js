import React from 'react';
import { 
  MembersContainer, 
  MembersWrapper, 
  MembersTitle,
  MembersLink,
  MemberIcon
} from './MembersElements';

import baobab from '../../images/baobab.png';
import hanwha from '../../images/hanwha.png';
import ibm from '../../images/logo_ibm.png';
import hines from '../../images/hines.png';

const MembersSection = ({ lightBg, }) => {

  return (
    <>
      <MembersContainer lightBg = {lightBg} id = 'members'>
        <MembersWrapper>
          <MembersTitle>
            Members
          </MembersTitle>
          <MembersLink>
            <MemberIcon name = "IBM" src = {ibm} width = {300} height = {150}></MemberIcon>
            <MemberIcon name = "Heins" src = {hines} width = {300} height = {300}></MemberIcon>
          </MembersLink>
          <MembersLink>
            <MemberIcon name = "BaobabAiBio" src = {baobab}  width = {300} height = {120}></MemberIcon>
            <MemberIcon name = "hanhwa" src = {hanwha} width = {300} height = {100}></MemberIcon>
          </MembersLink>
        </MembersWrapper>
      </MembersContainer>
    </>
  )
}

export default MembersSection;