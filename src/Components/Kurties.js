import React from "react";
import Kurties from "../data.json";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductKurties = () => {
  return (  
    <div>
      {Object.entries(Kurties).map(([slug, { name, img}]) => {
        return (
          <Link to={`/products/${slug}`} key={name}>
            <Card key={name} className="d-inline-block kurtie-card">
              <Card.Img variant="top" src={img}  />
              <Card.Body>
                <Button variant="info">View</Button>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
