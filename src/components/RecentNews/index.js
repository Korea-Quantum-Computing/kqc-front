import React, { useState, useEffect } from "react";
import { Button , BtnWrap } from '../../components/Aboutus/AboutusElements';
import NewsSection from "../../components/NewsSection";
import moment from 'moment';
import { articles as articleList} from '../../data/articles';



const RecentNews = ( {name }) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    setArticles(articleList.sort((a, b) => (moment(a.date, 'DD-MM-YY') > moment(b.date, 'DD-MM-YY')) ? -1 : 1));
  }, [])
  

  return (
    <>
      <div id = 'resources' style = {{width: '100%', height: '600px', display: 'flex', justifyContent: 'center',}}>
        < div style = {{width: '1000px'}}>
            <h1 style = {{fontSize: '2.5rem', fontWeight: 700, marginTop: '100px', marginBottom: '50px'}}>Recent News</h1>
          <NewsSection nRows = {1} nCols = {3} data = {articles} image = {false} size = {'small'} />
          <div style = {{width: '1000px', marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
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
          </div>         
        </div>
      </div>
    </>
  )
}

export default RecentNews;