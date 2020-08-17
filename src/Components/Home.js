import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col xs={12}> 
            <h1>Welcome To QMR Collections</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
