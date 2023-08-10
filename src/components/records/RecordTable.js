import React, { useEffect } from 'react';
import moment from 'moment';

function RecordTable() {
  const [data, setData] = React.useState([]);
  const dateStr = moment().format('YYYY.MM.DD');
  useEffect(() => {
    setData(Array.from({ length: 30 }, () => (
      {
        exercise_name: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      }
    )))
  }, [])
  return (
    <div className='record-chart-container'>
      <div className='record-chart-title'><span>MY<br />EXERCISE</span> {dateStr}</div>
      <div className='record-list'>
        {data.map((item, index) => {
          return (
            <div className='record-item'>
              <div className='record-item-name'>{item.exercise_name}</div>
              <div className='record-item-kcal'>{item.kcal}kcal</div>
              <div className='record-item-time'>{item.time} min</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default RecordTable;