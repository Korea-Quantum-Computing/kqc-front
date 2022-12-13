import styled from "styled-components";


export const MembersContainer = styled.div`
  min-height: 900px;
  display: flex;
  flex-direction: column;
  // justify-content: start;
  align-items: start;
  background: #f7f8fa;
  max-width: 1000px;
  min-width: 1000px;
  @media screen and (max-width: 768px) {
    // height: 1100px;
  }

  @media screen and (max-width: 480px) {
    // height: 1300px;
    min-width: 400px;
    min-height: 500px;
  } 
`;

export const MembersWrapper = styled.div`
  display: grid;
  z-index: 1;
  // height: 8px;
  grid-template-columns: 'repeat(4, 1fr)';
  max-width: 1000px;
  // margin-right: auto;
  // margin-left: auto;
  margin-top: 0;
  padding: 0 24ps;
  justify-content: start;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } 
`;


export const MembersLink = styled.div`

`;


export const MembersTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
  margin-top: 20px;
  color: #000;
  margin-bottom: 40px;
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`

export const MemberIcon = styled.img`
  //height: 100px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    height: 40px;
    padding: 5px 5px 5px 5px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    justify-content: center;
}
`;