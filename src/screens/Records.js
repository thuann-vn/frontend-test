import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecommendItem from '../components/records/RecommendItem';
import RecordChart from '../components/records/RecordChart';
import RecordTable from '../components/records/RecordTable';
import RecordDiary from '../components/records/RecordDiary';

function About() {
  return (
    <Container>
      <div className='recommend-list'>
        <Row>
          <Col md={4}>
            <RecommendItem item={{
              title: 'BODY RECORD',
              description: '自分のカラダの記録',
              image: 'Imagine/records/recommend_1.png'
            }} />
          </Col>
          <Col md={4}>
            <RecommendItem item={{
              title: 'MY EXERCISE',
              description: '自分の運動の記録',
              image: 'Imagine/records/recommend_3.png'
            }} />
          </Col>
          <Col md={4}>
            <RecommendItem item={{
              title: 'MY DIARY',
              description: '自分の日記',
              image: 'Imagine/records/recommend_3.png'
            }} />
          </Col>
        </Row>
      </div>
      <RecordChart/>
      <RecordTable/>
      <RecordDiary/>
    </Container>
  );
}

export default About;