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

 import { articles } from '../../data/articles';

const ResourcesSection = ({ 
    lightBg, 
    id, 
    imgStart, 
    lightText, 
  }) => {

    console.log('news data = ', articles)
  return (
    <>

      <ResourcesContainer lightBg = {lightBg} id = {id}>
        <ResourcesWrapper>
          <ResourcesRow imgStart = { imgStart }>
          <Heading style = {{marginLeft: '-20px', marginTop: '100px'}} lightText = {lightText}>Recent News</Heading>
          </ResourcesRow>
          <ResourcesRow>
            <Swiper
              id = 'news'
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log('on swiper')}
            >
              {
                articles.map((d, i) => {
                  console.log('kkkkkk ', d.link)
                  return(
                    <>
                      <SwiperSlide key = 'slide-1' style = {{ listStyle: 'none', color: '#f7f8fa'}}>
                        <ResourcesCard onClick = {() => {window.open(d.link)}}>
                          <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px'}}>
                            <Badge pill bg = "primary">Tech</Badge>
                          </div>
                          <div style = {{display: 'flex', justifyContent: 'flex-start', height:'50px', width: '100%'}}>
                            <ResourcesH1 style={{display: 'flex', justifyContent: 'center'}}>{d.media}</ResourcesH1>
                          </div>
                          <div>
                            <ResourcesH2>
                            {d.title}
                            </ResourcesH2>
                          </div>
                          <div style = {{height:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'end', width: '100%'}}>
                          <ResourcesDate>22/08/26</ResourcesDate>
                          </div>
                        </ResourcesCard>
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </ResourcesRow>
        </ResourcesWrapper>
      </ResourcesContainer>
    </>
  )
}

export default ResourcesSection;