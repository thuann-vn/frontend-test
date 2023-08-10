import React, { useEffect } from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';

function RecordDiary() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(Array.from({ length: 8 }, () => (
      {
        datetime: moment().format('YYYY.MM.DD HH:mm'),
        text: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
      }
    )))
  }, [])
  return (
    <div className='diary-container'>
      <div className='diary-title'>MY DIARY</div>
      <div className='diary-list'>
        {data.map((item, index) => {
          return (
            <div className='diary-item'>
              <div className='diary-item-container'>
                <div className='diary-item-datetime'>{item.datetime}</div>
                <div className='diary-item-text'>{item.text}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='diary-footer'>
        <Button variant='primary'>自分の日記をもっと見る</Button>
      </div>
    </div>
  );
}

export default RecordDiary;