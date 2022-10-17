import React from 'react';
import { Tag } from "atomize";
import moment from 'moment';
import 'moment/locale/ko';

import { 
  Container, 
  Wrapper, 
  CardWrapper,
  Media,
  MediaWrapper,
  NewsImage,
  H2,
  Title,
  Date,
  DateWrapper
 } from './ResourcesElements';

 
moment.locale('ko');


 const Card = ( {data, image, size} ) => {
  return (
    <>
      <CardWrapper image = {image} onClick = {() => {window.open(data.link)}}>
        <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px'}}>
          <Tag
            bg={`#0b2865`}
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
            textWeight = '700'
            style = {{width: '80px',}}
          >
            {data.category}
          </Tag>
        </div>
        {
          image && data.img_name !== undefined && (
          <NewsImage 
            src = {require(`../../images/media/${data.img_name}`)} 
            alt = {data.img} 
          />
        )}
        <MediaWrapper>
          <Media>{data.media}</Media>
        </MediaWrapper>
        <Title>
          <H2 size = {size}>
          {data.title}
          </H2>
        </Title>
        <DateWrapper>
         <Date>{moment(data.date, 'DD-MM-YY').format('YY / MM / DD')}</Date>
        </DateWrapper>
    </CardWrapper>
    </>
  )
 }

 
 const NewsRow = ( { data, image, nCols, size } ) => {
  return (
    <>
      <Wrapper nCols = {nCols}>
        {
          data.map((d, i) => (<Card data = {d} key = {`wrapper-${image}-${i}`} image = {image} size = {size}/>))
        }
      </Wrapper>
    </>
  )
 }


const Section = ({ 
    nRows,
    nCols,
    image,
    size,
    data
  }) => {

  const sliceIntoChunks = (arr, chunkSize) => {
      const res = [];
      for (let i = 0; i < Math.min(arr.length, nRows * nCols); i += chunkSize) {
          const chunk = arr.slice(i, i + chunkSize);
          res.push(chunk);
      }
      return res;
  }

  if (data !== undefined ) {
    data = sliceIntoChunks(data, nCols)
    
  } else {
    data = []
    alert('No data avaiable')
  }
  
  
  return (
    <>
      <Container>
        {
          data.map((d, i) => (
            <div key = {`div-newsrow-${i}`}>
              <NewsRow key = {`newsrow-${i}`} data = {d} image = {image} nCols ={nCols} size = {size}/>
            </div>)
          )
        }
      </Container>
    </>
  )
}

export default Section;