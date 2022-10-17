import React, { useState, useEffect } from "react";
import { Button ,  } from '../../components/Aboutus/AboutusElements';
import NewsSection from "../../components/NewsSection";
import moment from 'moment';
import { articles as articleList} from '../../data/articles';
import { NewsContainer, BtnWrap, NewsHead } from './NewsElements';


const RecentNews = ( {name }) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    setArticles(articleList.sort((a, b) => (moment(a.date, 'DD-MM-YY') > moment(b.date, 'DD-MM-YY')) ? -1 : 1));
  }, [])
  

  return (
    <>
    <div style = {{display: 'flex', justifyContent: 'center', width: '100%', background: '#f7f8fa'}}>
      <NewsContainer id = 'resources'>
        <NewsHead>
          Recent News
        </NewsHead>
          <div style = {{display: 'flex', justifyContent: 'center'}}>
          <NewsSection nRows = {1} nCols = {3} data = {articles} image = {false} size = {'small'} />
          </div>
          <BtnWrap>
              <Button 
                href = '/news'
                primary = {1}
                dark = {0 }
                dark_2 = { 1 }  
              >
                Read More
              </Button>
            </BtnWrap>        
      </NewsContainer>
      </div>
    </>
  )
}

export default RecentNews;