import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
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

export const HeroBg = styled.div`
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
  background: #232a34;
`;


export const HeroContent = styled.div`
  margin-top: 80px;
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  // font-family: 'Audiowide';
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: left;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;



export const HeroP = styled.p`
  margin-top: 24px;
  margin-bottom: 12px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Audiowide';
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroSP = styled.p`
  margin-top: 4px;
  color: #fff;
  font-size: 18px;
  text-align: left;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;


export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroImgWrap = styled.div`
  margin-top: 30px;
  max-width: 555px;
  height: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
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

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText}) => (darkText ? '#010606': '#fff')};
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