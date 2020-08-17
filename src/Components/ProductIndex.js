import React from "react";
import Kurties from "../data.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const ProductIndex = () => {
  return (
    <div>
      <Container className="product-container">
        <Row>
          {" "}
          <Col sm={4}>
            {Object.entries(Kurties).map(([slug, { name, img, price }]) => {
              console.log(name);
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
