import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AboutusContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9': '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutusWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 800px;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24ps;
  justify-content: center;
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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  margin-top: 40px;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const FullTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa': '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText}) => (darkText ? '#010606': '#fff')};
`;


export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const FullImgWrap = styled.div`
  max-width: 800px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
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

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#0b2865': '#555')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
  color: ${({dark}) => (dark ? '#010606': '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#ccc' : '#01BF71')};
    font-weight: ${({primary}) => (primary ? '700' : '700')};
  }
`