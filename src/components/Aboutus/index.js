
import React from 'react';
import { Button } from '../ButtonElement';

import { 
  AboutusContainer, 
  AboutusWrapper, 
  AboutusRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  FullTextWrapper,
  TopLine, 
  Heading, 
  Subtitle, 
  // BtnWrap,
  ImgWrap,
  FullImgWrap,
  Img,
  AboutusH1,
  AboutusP,
 } from './AboutusElements';


const AboutusSection = ({ 
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description_1,
    description_2,
    description_3, 
    description_4,
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark_2,
  }) => {

  return (
    <>
      <AboutusContainer lightBg = {lightBg} id = {id}>
        
        <AboutusWrapper>
          <AboutusRow imgStart = { imgStart }>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText = {lightText}>{headline}</Heading>
              <Subtitle darkText = {darkText}>{description_1}</Subtitle>
              <Subtitle darkText = {darkText}>{description_2}</Subtitle>
              <Subtitle darkText = {darkText}>{description_3}</Subtitle>
              {/* <BtnWrap>
                <Button 
                  to="home"
                  smooth = {true}
                  duration = {500}
                  spy = {true}
                  exact = 'true'
                  offset = {-80}
                  primary = { primary ? 1 : 0}
                  dark = { dark ? 1 : 0 }
                  dark_2 = { dark_2 ? 1 : 0 }  
                >{buttonLabel}</Button>
              </BtnWrap> */}
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src = {img} alt = {alt}/>
              </ImgWrap>
            </Column2>
          </AboutusRow>

          <FullTextWrapper>
          <AboutusH1>Out of the lab into the real world</AboutusH1>
          <AboutusP>KQC will take the lead in building a quantum ecosystem
  so that anyone can easily apply the cutting-edge services to solving the real-world problems.</AboutusP>
        </FullTextWrapper>
        <FullImgWrap>
          <Img src = {img} alt = {alt} />
        </FullImgWrap>
        </AboutusWrapper>

       

        
        

        
      </AboutusContainer>
    </>
  )
}

export default AboutusSection;