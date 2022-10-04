
import React from 'react';

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
  BtnWrap,
  Button
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
              {/* <TopLine>{topLine}</TopLine> */}
              <Heading lightText = {lightText}>{headline}</Heading>
              <Subtitle darkText = {darkText}>{description_1}</Subtitle>
              <Subtitle darkText = {darkText}>{description_2}</Subtitle>
              <div style ={{marginTop: '40px'}}>
                <BtnWrap>
                  <Button 
                    href = '/aboutus'
                    primary = { 1}
                    dark = { dark ? 1 : 0 }
                    dark_2 = { dark_2 ? 1 : 0 }  
                    
                  >{buttonLabel}</Button>
                </BtnWrap>
              </div>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src = {img} alt = {alt}/>
              </ImgWrap>
            </Column2>
          </AboutusRow>
        </AboutusWrapper>

       

        
        

        
      </AboutusContainer>
    </>
  )
}

export default AboutusSection;