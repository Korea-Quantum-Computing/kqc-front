import styled from "styled-components";


export const MembersContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } 
`;

export const MembersWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24ps;
  justify-content: center;
`;

export const MembersLink = styled.div`
  display: flex;
  flex-direction: row;
`;


export const MembersTitle = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-with: 480px) {
    font-size: 2rem;
  }
`

export const MemberIcon = styled.img`
  height: 100px;
  width: 250px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 10px;
`;