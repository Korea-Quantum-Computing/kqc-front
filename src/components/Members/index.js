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

const MembersSection = ({ lightBg, }) => {

  return (
    <>
      <MembersContainer lightBg = {lightBg} id = 'members'>
        <MembersWrapper>
          <MembersTitle>
            Members
          </MembersTitle>
          <MembersLink>
            <MemberIcon name = "BaobabAiBio" src = {baobab}></MemberIcon>
            <MemberIcon name = "hanhwa" src = {hanwha}></MemberIcon>
            <MemberIcon name = "comp2" src = {baobab}></MemberIcon>
          </MembersLink>

        </MembersWrapper>
      </MembersContainer>
    </>
  )
}

export default MembersSection;