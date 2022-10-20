import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

export const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 0;
  height: 250px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0% , transparent 100%);
    z-index: 2;
  }
`;

export const Bg = styled.div`
  position: absolute; 
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  height: 250px;
  overflow: hidden;
`;

export const H1 = styled.h1`
  color: #ccc;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;
  max-width: 1000px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.2;
`;


export const VideoBg = styled.video`
  with: 100%;
  height: 100%;
  opacity: 0.5;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  transform: scale(3.5);

  @media screen and (max-width: 480px) {
    transform: scale(2.0);
  }
`;

export const Icon = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: "Audiowide";
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

export const Content = styled.div`
  margin-top: 80px;
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  background: #f8f9fa;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 250px;
  max-width: 500px;
//   padding: 0px;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    cursor: pointer; 
  } 
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    list-style: none;
    text-align: center;

  @media screen and (max-width: 480px){
    grid-template-columns: 1fr;
  }
`;

export const ProcessImg = styled.img`
  height: 150px;
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;
