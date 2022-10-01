import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { 
  AboutusContainer, 
  AboutusWrapper, 
  AboutusRow, 
  Heading,
  AboutusCard,
  AboutusIcon,
  AboutusH2,
  AboutusP,
 } from './AboutusElements';


 import Icon1 from '../../images/clouding.svg';


const AboutusSection = ({ 
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

  return (
    <>
      <AboutusContainer lightBg = {lightBg} id = {id}>
        
        <AboutusWrapper>
          <AboutusRow imgStart = { imgStart }>
          <Heading lightText = {lightText}>News</Heading>
          </AboutusRow>
          <AboutusRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'slide-1' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 1</AboutusH2>
                  <AboutusP>
                    KQC Joins IBM
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-2' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 2</AboutusH2>
                  <AboutusP>
                    바오밥 join
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-3' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 3</AboutusH2>
                  <AboutusP>
                    KQC opens office at Busan
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-4' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 4</AboutusH2>
                  <AboutusP>
                    Kion Even Makes Homepage!!
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

            </Swiper>

          </AboutusRow>
          <AboutusRow>
            <Heading lightText = { lightText }>Global Trend</Heading>
          </AboutusRow>

          <AboutusRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'gt-1' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 1</AboutusH2>
                  <AboutusP>
                    KQC Joins IBM
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-2' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 2</AboutusH2>
                  <AboutusP>
                    바오밥 join
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-3' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 3</AboutusH2>
                  <AboutusP>
                    KQC opens office at Busan
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-4' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>News 4</AboutusH2>
                  <AboutusP>
                    Kion Even Makes Homepage!!
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

            </Swiper>
            
          </AboutusRow>


          <AboutusRow>
            <Heading lightText = { lightText }>Technical Blogs</Heading>
          </AboutusRow>

          <AboutusRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'tb-1' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>Blog 1</AboutusH2>
                  <AboutusP>
                    KQC Joins IBM
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-2' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>Blog 2</AboutusH2>
                  <AboutusP>
                    바오밥 join
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-3' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>Blog 3</AboutusH2>
                  <AboutusP>
                    KQC opens office at Busan
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-4' style = {{ listStyle: 'none'}}>
                <AboutusCard>
                  <AboutusIcon src = {Icon1} />
                  <AboutusH2>Blog 4</AboutusH2>
                  <AboutusP>
                    Kion Even Makes Homepage!!
                  </AboutusP>
                </AboutusCard>
              </SwiperSlide>

            </Swiper>
            
          </AboutusRow>

        </AboutusWrapper>
      </AboutusContainer>
    </>
  )
}

export default AboutusSection;