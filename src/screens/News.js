import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewsCategory from '../components/news/NewsCategory';
import NewsList from '../components/news/NewsList';

function News() {
  return (
    <Container>
      <div className='category-list'>
        <Row>
          <Col md={3}>
            <NewsCategory item={{
              title: 'RECOMMENDED COLUMN',
              description: 'オススメ'
            }} />
          </Col>
          <Col md={3}>
            <NewsCategory item={{
              title: 'RECOMMENDED DIET',
              description: 'ダイエット'
            }} />
          </Col>
          <Col md={3}>
            <NewsCategory item={{
              title: 'RECOMMENDED BEAUTY',
              description: '美容'
            }} />
          </Col>
          <Col md={3}>
            <NewsCategory item={{
              title: 'RECOMMENDED HEALTH',
              description: '健康'
            }} />
          </Col>
        </Row>
      </div>
      <NewsList/>
    </Container>
  );
}

export default News;