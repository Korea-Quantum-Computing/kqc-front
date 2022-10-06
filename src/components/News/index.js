import React, { useState, useEffect } from "react";
import {
  IconKQC,
  H1,
  P,
  Container,
} from './NewsElements';

import ResourcesSection from "../Resource";
import ToggleButton from "../../components/ToggleButton"

import { articles } from '../../data/articles';


const filterNews = (articleList, filterOption) => {
  if (filterOption === 'all') {
    return articleList;
  } else {
    return articleList.filter((a) => (a.category === filterOption))
  }
}


const News = ( {name }) => {

  const [filterOption, setFilterOption] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    setFilteredArticles(filterNews(articles, filterOption));
  }, [filterOption])
  
  return (
    <>
    <div style ={{display: 'flex', justifyContent: 'center'}}>
    <Container style = {{width: '1000px'}}>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
        <IconKQC to="/">KQC</IconKQC> 
        </div>
        <H1>Latest in Quantum World</H1>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '30px'}}>
          <ToggleButton setter = {setFilterOption}/>
        </div>
        <hr
          style={{
            marginTop: '20px',
            color: '#000',
            height: '5px',
          }}
        />
        <div style = {{display: 'flex', width: '1000', justifyContent: 'center', marginTop: '20px'}}>
          {
             <ResourcesSection nRows = {10} nCols = {2} data = {filteredArticles} image = { true }/>
          }
        </div>
      </Container>
    </div>
      
    </>
  )
}

export default News;