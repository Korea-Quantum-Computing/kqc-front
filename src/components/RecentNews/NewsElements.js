import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewsContainer = styled.div`
  min-height: 600px;
  width: 100%;
  background: #fff;
  overflow-y: scroll;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    min-height: 1100px;
  }
`;

export const BtnWrap = styled.div`
  max-width: 1000px;
  margin-top: 30px;
  display: flex;
  justify-content: start;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }

`;

export const NewsHead = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  justify-content: start;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;


export const Wrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
      height: 80%;
    }
`;


export const IconKQC = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #0b2865;
  font-weight: 700;
  font-size: 1.5rem;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #0b2865;
  }
  
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ContactusContent = styled.div`
  margin-top: 300px;
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const H1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #010606;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const HorizonBar = styled.hr`
  margin-top: 20px;
  color: #000;
  height: 5px;
`;


export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;


export const Input = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const ContactusBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


export const ImgBg = styled.img`
  with: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: 999
`;