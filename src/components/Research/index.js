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
          <div style = {{display: 'flex', color: '#010606', justifyContent: 'flex-start', marginBottom: '-20px'}}>
            <h1 style = {{fontSize: '36px'}}>Main research area of quantum computing</h1>
          </div>
          <div style ={{display: 'flex', color: '#010606', flexDirection: 'row', justifyContent: 'center'}}>
            <div style = {{
              display:'flex', 
              flexDirection: 'column', 
              minWidth: '300px', 
              height: '200px', 
              border: 'solid',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px'
            }}>
              <div style = {{textAlign: 'center', marginBottom: '50px'}}>
                <h2 style = {{fontSize: '18px', fontWeight: '700'}}>Simulating Quantum Systems</h2>
              </div>
              <div style = {{margintTop: '50px', textAlign: 'left', fontSiz: '16px'}}>
                <ul>
                  <li>Quantum Chemistry</li>
                  <li>Material science</li>
                  <li>High Energy physics</li>
                </ul>
              </div>
            </div>
            <div style = {{
              display:'flex', 
              flexDirection: 'column', 
              minWidth: '300px', 
              height: '250px', 
              border: 'solid',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px',
              }}>
              <div style = {{textAlign: 'center', marginBottom: '50px'}}>
                <h2 style = {{fontSize: '18px', fontWeight: '700'}}>Artificial Intelligence</h2>
              </div>
              <div style = {{margintTop: '50px', textAlign: 'left'}}>
                <ul>
                  <li>Better model training</li>
                  <li>Pattern recognition</li>
                  <li>Fraud detection</li>
                </ul>
              </div>
            </div>
            <div style={{
              display:'flex', 
              flexDirection: 'column', 
              minWidth: '300px', 
              height: '250px', 
              border: 'solid',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px'
              }}>
              <div style = {{textAlign: 'center', marginBottom: '50px'}}>
                <h2 style = {{fontSize: '18px', fontWeight: '700'}}>Optimization / Monte Carlo</h2>
              </div>
              <div style = {{margintTop: '50px', textAlign: 'left'}}>
                <ul>
                  <li>Portfolio Optimization</li>
                  <li>Risk analysis</li>
                  <li>Loans & Credit scoring</li>
                  <li>MonteCarlo like application</li>
                </ul>
              </div>
            </div>
          </div>
        </ResearchWrapper>
      </ResearchContainer>
    </>
  )
}

export default ResearchSection;