
import React from 'react';

import { 
  AboutusContainer, 
  AboutusWrapper, 
  AboutusRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  Heading, 
  Subtitle, 
  ImgWrap,
  Img,
  BtnWrap,
  Button
 } from './AboutusElements';


const AboutusSection = ({ 
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    headline, 
    darkText, 
    description_1,
    description_2,
    buttonLabel, 
    img, 
    alt,
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