import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductIndex = () => {
  return (
    <div className="product-div">
      <Card style={{ width: "18rem" }} className="d-inline-block product-card">
        <Card.Img variant="top" src="/Images/kurti1.jpg" height="320px" />
        <Card.Body>
          <Card.Title>Kurties</Card.Title>
          <Card.Text>
            Find out a huge range of latest, in-fashion kurties.Designer,
                  Embroided and Simple Kurties
          </Card.Text>
          <Link to="/products/kurties">
            <Button variant="primary">Find Kurties</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="d-inline-block product-card" >
        <Card.Img variant="top" src="/Images/jeans3.jpg" height="320px" />
        <Card.Body>
          <Card.Title>Pants</Card.Title>
          <Card.Text>
          Find out a huge range of latest, in-fashion pants.Stretchable,
                  Comfortable and flexible Pants
          </Card.Text>
          <Link to="/products/pants">
            <Button variant="primary">Find Pants</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="d-inline-block product-card">
        <Card.Img variant="top" src="/Images/tights1.jpg" height="320px"/>
        <Card.Body>
          <Card.Title>Tights</Card.Title>
          <Card.Text>
         Find out Good quality Tights available in different colors and fabric
          </Card.Text>
          <Link to="/products/tights">
            <Button variant="primary">Find Tights</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
