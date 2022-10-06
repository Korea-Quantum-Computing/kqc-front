import React from 'react';
import { Tag } from "atomize";

import { 
  ResourcesContainer, 
  ResourcesWrapper, 
  ResourcesCard,
  ResourcesH1,
  ResourcesH2,
  ResourcesDate
 } from './ResourcesElements';


 const Card = ( {data, image} ) => {
  return (
    <>
      <ResourcesCard image = {image} onClick = {() => {window.open(data.link)}}>
        <div style = {{display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px'}}>
          <Tag
            bg={`info700`}
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
          image && data.img !== undefined && (
          <div style = {{height: '200px', width: '100%', marginBottom: '20px',}}>
            <img 
              src = {require(`../../images/${data.img}`)} 
              alt = {data.img} 
              style = {{height: '200px', width: '100%', objectFit: 'fill'}}
            />
          </div>
        )}
        <div style = {{display: 'flex', justifyContent: 'flex-start', height:'50px', width: '100%', padding: '20px'}}>
          <ResourcesH1 style={{display: 'flex', justifyContent: 'center'}}>{data.media}</ResourcesH1>
        </div>
        <div style = {{display: 'flex', padding: '20px'}}>
          <ResourcesH2>
          {data.title}
          </ResourcesH2>
        </div>
        <div style = {{height:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'end', width: '100%', padding: '20px'}}>
        <ResourcesDate>22/08/26</ResourcesDate>
        </div>
    </ResourcesCard>
    </>
  )
 }

 
 const NewsRow = ( {data, image, nCols} ) => {
  return (
    <>
      <ResourcesWrapper nCols = {nCols}>
        {
          data.map((d, i) => (<Card data = {d} key = {`resourceswrapper-${image}-${i}`} image = {image}/>))
        }
      </ResourcesWrapper>
    </>
  )
 }


const ResourcesSection = ({ 
    nRows,
    nCols,
    image,
    data
  }) => {

  const sliceIntoChunks = (arr, chunkSize) => {
    console.log('data length = ', Math.min(arr.length, nRows * nCols))
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
  

    console.log('data = ', data)
  return (
    <>
      <ResourcesContainer>
        {
          data.map((d, i) => (
            <div  style = {{marginBottom: '40px'}}>
              <NewsRow key = {`newsrow-${i}`} data = {d} image = {image} nCols ={nCols}/>
            </div>)
          )
        }
      </ResourcesContainer>
    </>
  )
}

export default ResourcesSection;