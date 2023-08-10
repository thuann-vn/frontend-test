import React from 'react';

function RecommendItem({ item = {image: '', title: '', 'description': ''} }) {
  return (
    <div className='recommend-item'>
        <div className='recommend-item-container'>
            <div className='recommend-item-image' style={{backgroundImage: `url(${item.image})`}}></div>
            <div className='recommend-item-overlay'></div>
            <h3 className='recommend-item-title'>{item.title}</h3>
            <div className='recommend-item-description'>{item.description}</div>
        </div>
    </div>
  );
}

export default RecommendItem;