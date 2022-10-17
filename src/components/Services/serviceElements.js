import styled from 'styled-components';
import { Link } from 'react-scroll';



export const ServicesContainer = styled.div`
  min-height: 800px;
  background: #fff;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    // height: 1100px;
  }

  @media screen and (max-width: 480px) {
    // height: 1300px;
  } 
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  padding: 0 0px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px){
    height: 300px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: poniter;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 0px;

  @media screen and (max-width: 480px) {
    height: 100px;
    width: 100px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-top: 100px;
  margin-bottom: 48px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    font-size: 28px;
    display: flex;
    justify-content: center;
  }
`;

export const ServicesH2 = styled.h2`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ServiceHeading = styled.div`
  display: flex;
  // border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1000px;
  color: #fff;
  background: #0b2865;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(Link)`
  border-radius: 30px;
  background: ${({primary}) => (primary ? '#010606': '#333')};
  white-space: nowrap;
  padding: 5px;
  color: ${({dark}) => (dark ? '#333': '#fff')};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    font-size: 12px;
    border-radius: 15px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#010606' : '#01BF71')};
  }
`