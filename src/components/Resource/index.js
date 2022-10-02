import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { 
  ResourcesContainer, 
  ResourcesWrapper, 
  ResourcesRow, 
  Heading,
  ResourcesCard,
  ResourcesIcon,
  ResourcesH2,
  ResourcesP,
 } from './ResourcesElements';


 import Icon1 from '../../images/clouding.svg';


const ResourcesSection = ({ 
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
      <ResourcesContainer lightBg = {lightBg} id = {id}>
        
        <ResourcesWrapper>
          <ResourcesRow imgStart = { imgStart }>
          <Heading lightText = {lightText}>News</Heading>
          </ResourcesRow>
          <ResourcesRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'slide-1' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 1</ResourcesH2>
                  <ResourcesP>
                    KQC Joins IBM
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-2' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 2</ResourcesH2>
                  <ResourcesP>
                    바오밥 join
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-3' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 3</ResourcesH2>
                  <ResourcesP>
                    KQC opens office at Busan
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-4' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 4</ResourcesH2>
                  <ResourcesP>
                    Kion Even Makes Homepage!!
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

            </Swiper>

          </ResourcesRow>
          <ResourcesRow>
            <Heading lightText = { lightText }>Global Trend</Heading>
          </ResourcesRow>

          <ResourcesRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'gt-1' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 1</ResourcesH2>
                  <ResourcesP>
                    KQC Joins IBM
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-2' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 2</ResourcesH2>
                  <ResourcesP>
                    바오밥 join
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-3' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 3</ResourcesH2>
                  <ResourcesP>
                    KQC opens office at Busan
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'gt-4' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 4</ResourcesH2>
                  <ResourcesP>
                    Kion Even Makes Homepage!!
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

            </Swiper>
            
          </ResourcesRow>


          <ResourcesRow>
            <Heading lightText = { lightText }>Technical Blogs</Heading>
          </ResourcesRow>

          <ResourcesRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'tb-1' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>Blog 1</ResourcesH2>
                  <ResourcesP>
                    KQC Joins IBM
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-2' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>Blog 2</ResourcesH2>
                  <ResourcesP>
                    바오밥 join
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-3' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>Blog 3</ResourcesH2>
                  <ResourcesP>
                    KQC opens office at Busan
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'tb-4' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>Blog 4</ResourcesH2>
                  <ResourcesP>
                    Kion Even Makes Homepage!!
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

            </Swiper>
            
          </ResourcesRow>

        </ResourcesWrapper>
      </ResourcesContainer>
    </>
  )
}

export default ResourcesSection;