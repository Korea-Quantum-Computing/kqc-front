import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Badge from 'react-bootstrap/Badge';
// Import Swiper styles
import 'swiper/css';

import { 
  ResourcesContainer, 
  ResourcesWrapper, 
  ResourcesRow, 
  Heading,
  ResourcesCard,
  ResourcesIcon,
  ResourcesH1,
  ResourcesH2,
  ResourcesP,
  ResourcesDate
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
          <Heading style = {{marginLeft: '-20px'}} lightText = {lightText}>Recent News</Heading>
          </ResourcesRow>
          <ResourcesRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key = 'slide-1' style = {{ listStyle: 'none', color: '#f7f8fa'}}>
                <ResourcesCard onClick = {() => {window.open('http://www.daum.net')}}>
                  <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px'}}>
                    <Badge pill bg = "primary">Tech</Badge>
                  </div>
                  <div style = {{display: 'flex', justifyContent: 'flex-start', height:'50px', width: '100%'}}>
                    <ResourcesH1 style={{display: 'flex', justifyContent: 'center'}}>KNN</ResourcesH1>
                  </div>
                  <div>
                    <ResourcesH2>
                    ‘꿈의 컴퓨터’ IBM 퀸텀 KQC 허브부산 개소
                    </ResourcesH2>
                  </div>
                  <div style = {{height:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'end', width: '100%'}}>
                  <ResourcesDate>22/08/26</ResourcesDate>
                  </div>
                  
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-2' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                    <Badge pill bg = "primary">Biz</Badge>
                  </div>
                  <ResourcesIcon src = {Icon1} />
                  <ResourcesH2>News 2</ResourcesH2>
                  <ResourcesP>
                    바오밥 join
                  </ResourcesP>
                </ResourcesCard>
              </SwiperSlide>

              <SwiperSlide key = 'slide-3' style = {{ listStyle: 'none'}}>
                <ResourcesCard>
                <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                    <Badge pill bg = "primary">Blog</Badge>
                  </div>
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
          
          
          {/* <ResourcesRow>
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
            
          </ResourcesRow> */}

        </ResourcesWrapper>
      </ResourcesContainer>
    </>
  )
}

export default ResourcesSection;