import React from 'react';

function NewsCategory({ item = {title: '', 'description': ''} }) {
  return (
    <div className='category-item'>
        <div className='category-item-container'>
            <h3 className='category-item-title'>{item.title}</h3>
            <div className='category-item-divider'></div>
            <div className='category-item-description'>{item.description}</div>
        </div>
    </div>
  );
}

export default NewsCategory;