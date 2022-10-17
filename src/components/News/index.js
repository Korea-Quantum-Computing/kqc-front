import React, { useState, useEffect } from "react";
import {
  IconKQC,
  H1,
  HorizonBar,
  Container,
  ToggleButtonWrapper
} from './NewsElements';

import NewsSection from "../NewsSection";
import ToggleButton from "../../components/ToggleButton"
import moment from 'moment';
import { articles } from '../../data/articles';


const filterNews = (articleList, filterOption) => {
  if (filterOption === 'all') {
    console.log('aa = ', moment(articleList[0].date, 'MM-DD-YY').format('YY-MM-DD'))
    return articleList.sort((a, b) => (moment(a.date, 'DD-MM-YY') > moment(b.date, 'DD-MM-YY')) ? -1 : 1);
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
    <Container>
      <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
        <IconKQC to="/">
          <img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo-blue.svg').default} alter = 'kqc-logo'/>
          KQC
        </IconKQC> 
      </div>

      <H1>Latest in Quantum World</H1>

      <ToggleButtonWrapper>
        <ToggleButton setter = {setFilterOption}/>
      </ToggleButtonWrapper>
      <HorizonBar/>
      <div style = {{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        {
            <NewsSection nRows = {10} nCols = {2} data = {filteredArticles} image = { true }/>
        }
      </div>
      </Container>
    </div>
      
    </>
  )
}

export default News;