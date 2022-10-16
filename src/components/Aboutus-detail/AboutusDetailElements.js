import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AboutusContainer = styled.div`
  background: #f1f2f3;
  display: flex;
  justify-content: center;
  // align-items: center;
  padding: 0 30px;
  height: 1800px;
  width: 100%;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


export const VideoBg = styled.video`
  with: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transform: scale(1.5);
  background: #232a34;
`;


export const AboutusContent = styled.div`
  z-index: 3;
  width: 1000px;
  height: 800px;
  position: relative;
  align-items: start;
`;

export const Icon = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  font-family: 'Audiowide';
  font-weight: 700;
  font-size: 1.5rem;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #f7f8fa;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const AboutusRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;


export const AboutusH1 = styled.h1`
  color: #0b2865;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const AboutusP = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  color: #0b2865;
  font-size: 24px;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutusSP = styled.p`
  margin-top: 12px;
  color: #0b2865;
  font-size: 18px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Tab = styled.div`
    width: 100%;
    height: auto;
    min-height: 400px;
    background: #fff;
    // margin: 3.5rem auto 1.5rem;
    // padding: 2rem 1rem;
    color: #E8F0F2;
    // border-radius: 2rem;

    @media screen and (max-width: 769px) {
     padding: 2rem 0;
    }
`;


/* Tab Navigation */
export const Nav = styled.div`
  width: 100%;
  // margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // justify-content: space-between;
  background: #010606;
  // border: 2px solid #39A2DB;
  // border-radius: 2rem;
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const NavLi = styled.li`
  list-style: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  line-height: 60px;
  height: 60px;
  width: 100%;
  transition: all 0.7s;
  font-size: 1.4rem;
  font-weight: bold;
  background: #0b2865;
  color: #02408f;
  // border-bottom-left-radius: 2rem;
  // border-top-left-radius: 2rem;

  &:hover {
    background: rgba(50, 224, 196, 0.15);
  }
  &.active {
    background: #fff;
    color: #0b2865;
`;


export const Content = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const AdvisorContaner = styled.div`
  margin-top: 50px;
  display: grid;
  height: 850px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

`;
//${({nCols}) => (`repeat(${nCols}, 1fr)`)};

export const PeopleCard = styled.div`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: ${({image}) => (image === true ? '500px': '300px')};
  max-width: 300px;
  height: 350px;
  padding: 0px;

  &:hover {
    cursor: pointer; 
  } 
`;

export const CardTitle = styled.div`
  margin-top: 20px;
  color: #010606;
  font-size: 1.0rem;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 80px;
  border-radius: 50%;

`;


export const CardBody = styled.div`
  margin-top: 10px;
  color: #888;
  font-size: 0.4em;
  font-weight: 400;
  line-height: .9;
`;

export const CardDesc = styled.div`
  margin-top: 20px;
  color: #222;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.3em;
  font-weight: 400;
  line-height: 1.2;
`;


