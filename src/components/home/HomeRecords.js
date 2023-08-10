import React, { useEffect } from 'react';
import { fetchRecords } from '../../api/api';
import { Button } from 'react-bootstrap';

function HomeRecords({ percentage }) {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const categories = ['morning', 'lunch', 'dinner', 'snack'];

  //Load data every time filter changes
  useEffect(() => {
    _loadData()
  }, [filter])

  //Load data from API
  const _loadData = async () => {
    const response = await fetchRecords(filter);
    setData(response);
  }

  return (
    <div className='home-records'>
      <div className='home-records-filter'>
        {
          categories.map((cat) => {
            return (<div className='home-records-filter-item' onClick={() => setFilter(cat)} key={cat}>
              <img src={`/Imagine/home/${cat}.png`} alt={cat} />
            </div>)
          })
        }
      </div>
      <div className='home-records-list'>
        {
          data.map((item) => {
            return (
              <div className='home-records-list-item' key={`${item.date}_${item.type}`}>
                <div className='home-records-list-item-container'>
                  <div className='home-records-list-item-image' style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className='home-records-list-item-date'>{item.date}.{item.type}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='home-records-footer'>
        <Button variant='primary'>記録をもっと見る</Button>
      </div>
    </div>

  );
}

export default HomeRecords;