import React from 'react';
import { Button } from '../ButtonElement';

import { 
  ResearchContainer, 
  ResearchWrapper, 
  ResearchRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap,
  ImgWrap,
  Img,
 } from './ResearchElements';


const ResearchSection = ({ 
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark_2,
  }) => {

    console.log('img = ', img)
  return (
    <>
      <ResearchContainer lightBg = {lightBg} id = {id}>
        
        <ResearchWrapper>
          <ResearchRow imgStart = { imgStart }>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText = {lightText}>{headline}</Heading>
              <Subtitle darkText = {darkText}>{description}</Subtitle>
              <BtnWrap>
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
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src = {img} alt = {alt}/>
              </ImgWrap>
            </Column2>
          </ResearchRow>
        </ResearchWrapper>
      </ResearchContainer>
    </>
  )
}

export default ResearchSection;