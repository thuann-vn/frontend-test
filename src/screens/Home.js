import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeMainPhoto from '../components/home/HomeMainPhoto';

function Home() {
  return (
    <Container fluid>
        <Row>
            <Col md={4} className='col-main-photo'>
                <HomeMainPhoto percentage={75}/>
            </Col>
            <Col md={8}>
                
            </Col>
        </Row>
    </Container>
  );
}

export default Home;