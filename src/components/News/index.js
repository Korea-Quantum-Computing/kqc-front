import React, { useState, useEffect } from "react";
import {
  IconKQC,
  H1,
  HorizonBar,
  Container,
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
    <Container style = {{width: '1000px'}}>
        <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
        <IconKQC to="/"><img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo-blue.svg').default}/>KQC</IconKQC> 
        </div>
        <H1>Latest in Quantum World</H1>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '30px'}}>
          <ToggleButton setter = {setFilterOption}/>
        </div>
        <HorizonBar/>
        <div style = {{display: 'flex', width: '1000', justifyContent: 'center', marginTop: '20px'}}>
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