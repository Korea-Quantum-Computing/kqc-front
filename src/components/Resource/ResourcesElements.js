import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  width: 1100px;
  background: '#fff';

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Wrapper = styled.div`
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

export const Row = styled.div`
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



export const CardWrapper = styled.div`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: ${({image}) => (image === true ? '500px': '300px')};
  max-width: 500px;
  padding: 0px;

  &:hover {
    cursor: pointer; 
  } 
`;

export const Icon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const Media = styled.h1`
  display: flex;
  justify-content: center;
  font-size: ${({size}) => (size === 'small' ? '1.4rem': '1.8rem')};
  font-weight: 700;
  color: #010606;
  bottom: 0;
  top: 0;
  // margin-bottom: 20px;

  @media screen and (max-with: 480px) {
    font-size: 2rem;
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  font-size: ${({size}) => (size === 'small' ? '1.4rem': '1.8rem')};
  font-weight: 700;
  color: #010606;
  margin-bottom: 20px;

  @media screen and (max-with: 480px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: ${({size}) => (size === 'small' ? '1.0rem': '1.2rem')};
  line-height: 1.5;
  font-weight: 400;
  color: #010606;
  margin-bottom: 10px;
`;


export const P = styled.p`
  font-size: 2 rem;
  color: #010606;
  text-align: center;
`;
// style = {{height:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'end', width: '100%', padding: '20px'}}


export const DateWrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
`;

export const Date = styled.p`
  font-size: 0.8 rem;
  font-weight: bold;
  padding-right: 20;
  height: 30;
  top: 0;
  bottom: 0;
  margin-bottom: 10px;
  // align-self: flex-end;
  color: #010606;
  text-align: end;
  bottom: 0;
`;

export const Title = styled.div`
  top: 0;
  bottom: 0;
  height: 150px;
  padding: 20px;
  padding-left: 40px;
  width: 100%;
  text-align: left;
  // position: fixed;
  overflow-y: hidden;
  overflow-x: hidden;
`;

