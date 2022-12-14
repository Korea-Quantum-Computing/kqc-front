import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1200px;
  background: #f7f8fa;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
      height: 80%;
    }
`;


export const Icon = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: 'Audiowide';
  color: #0b2865;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;

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


export const FormH1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #010606;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const FormP = styled.p`
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  color: #010606;
  font-size: 18px;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;


export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;


export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
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

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;


export const FormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // max-width: 1000px;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }

`;

export const MessageBoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
  }

`;

export const MessageBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 480px) {
    padding-left: 40px;
    padding-right: 40px;
  
  }

`;