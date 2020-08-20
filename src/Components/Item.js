import React from "react";
import Kurties from "../data.json";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Item = () => {
  const { slug } = useParams();
  const kurtie = Kurties[slug];
  const { img, price, des } = kurtie;

  console.log(kurtie);

  return (
    <div className="item-div">
      <Card className="d-inline-block item-card">
        <Card.Img variant="top" src={img} />
      </Card>
      <Card className="d-inline-block item-des">
        <Card.Body>
          <Card.Text> {des} </Card.Text>
          <h4>Price: {price}</h4>
          <Button
            className="order-button"
            href="https://www.facebook.com/qmrcollections"
            variant="outline-info"
          >
            Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
