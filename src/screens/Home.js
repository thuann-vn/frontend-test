import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeMainPhoto from '../components/home/HomeMainPhoto';
import HomeChart from '../components/home/HomeChart';
import HomeRecords from '../components/home/HomeRecords';

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4} className='col-main-photo'>
            <HomeMainPhoto percentage={75} />
          </Col>
          <Col md={8} className='col-main-chart'>
            <HomeChart />
          </Col>
        </Row>
      </Container>
      <Container>
        <HomeRecords />
      </Container>
    </>
  );
}

export default Home;