import styled from 'styled-components'

export const AboutusContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9': '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutusWrapper = styled.div`
  // display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutusRow = styled.div`
  max-height: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  margin-top: 20px;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa': '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText}) => (darkText ? '#010606': '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;



export const AboutusCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 200px;
  max-width: 400px;
  padding: 20px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  // transition: all 0.2s ease-in-out;

  // &:hover {
  //   transform: scale(1.02);
  //   transition: all 0.2s ease-in-out;
  //   cursor: poniter;
  // }
`;

export const AboutusIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const AboutusH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 20px;

  @media screen and (max-with: 480px) {
    font-size: 2rem;
  }
`;

export const AboutusH2 = styled.h2`
  font-size: 1rem;
  color: #010606;
  margin-bottom: 10px;
`;

export const AboutusP = styled.p`
  font-size: 1 rem;
  color: #010606;
  text-align: center;
`;