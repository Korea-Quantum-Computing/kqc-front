import styled from 'styled-components'

export const ResourcesContainer = styled.div`
  color: #fff;
  background: '#fff';

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ResourcesWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({nCols}) => (`repeat(${nCols}, 1fr)`)};
  align-items: center;
  grid-gap: 40px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ResourcesRow = styled.div`
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
  margin-bottom: 80px;
  font-size: 2.5rem;
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



export const ResourcesCard = styled.div`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: ${({image}) => (image === true ? '500px': '300px')};
  max-width: 600px;
  padding: 0px;

  &:hover {
    cursor: grab; 
  } 
`;

export const ResourcesIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const ResourcesH1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #010606;
  margin-bottom: 20px;

  @media screen and (max-with: 480px) {
    font-size: 2rem;
  }
`;

export const ResourcesH2 = styled.h2`
  font-size: 1.2rem;;
  line-height: 1.5;
  font-weight: 700;
  color: #010606;
  margin-bottom: 10px;
`;

export const ResourcesP = styled.p`
  font-size: 2 rem;
  color: #010606;
  text-align: center;
`;

export const ResourcesDate = styled.p`
  font-size: 0.8 rem;
  color: #010606;
  text-align: center;
`;
