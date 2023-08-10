import React, { useEffect } from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';

function NewsList() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(Array.from({ length: 8 }, () => (
      {
        datetime: moment().format('YYYY.MM.DD HH:mm'),
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['魚料理', '和食', 'DHA']
      }
    )))
  }, [])
  return (
    <div className='news-container'>
      <div className='news-list'>
        {data.map((item, index) => {
          return (
            <div className='news-item'>
              <div className='news-item-container'>
                <a href='#' className='news-item-image-container'>
                  <div className='news-item-image' style={{ backgroundImage: `url(Imagine/news/news_${index + 1}.png)` }}></div>
                  <div className='news-item-datetime'>{item.datetime}</div>
                </a>
                <a href='#' className='news-item-title'>{item.title}</a>
                <div className='news-item-tags'>{item.tags.map(tag => `#${tag}`).join(' ')}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='news-footer'>
        <Button variant='primary'>コラムをもっと見る</Button>
      </div>
    </div>
  );
}

export default NewsList;