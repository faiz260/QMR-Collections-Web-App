import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {Title} from './Title';
import useWebAnimations, {
  flipInX,
} from "@wellyshen/use-web-animations";
import {Footer } from './Footer';

export const Home = () => {
  const { ref} = useWebAnimations({
    ...flipInX,
    timing: {
      duration: 2000,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col xs={12}>
            <Title/>
          </Col>
          <Col xs={12}>
            <img
              style={{ marginTop: "30px" }}
              src="/Images/logo_.jpeg"
              alt="qmr-collections-logo"
              height="300px"
              width="300px"
              ref={ref}
            />
          </Col>
          <Col xs={12}>
            <h1
              style={{
                fontSize: "40px",
                marginTop: "100px",
                textDecoration: "underline",
              }}
            >
              Welcome to the Finest Collections in Town
            </h1>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col>
            <img
              style={{ borderRadius: "5%" }}
              src="/Images/kurti4.jpg"
              alt="kurti"
              height="480px"
              width="400px"
            />
          </Col>
          <Col>
            <Card
              style={{
                marginTop: "100px",
                height: "350px",
                borderRadius: "5%",
              }}
            >
              <Card.Body>
                <h6
                  style={{
                    textDecoration: "underline",
                    fontSize: "40px",
                    fontWeight: "100",
                    marginTop: "20px",
                  }}
                >
                  Wide Range of Kurties
                </h6>
                <Card.Subtitle
                  style={{ marginTop: "50px", lineHeight: "28px" }}
                >
                  We have a huge range of latest, in-fashion kurties.Designer,
                  Embroided and Simple Kurties are available in stock in
                  different fabrics ranges from linen, cotton and much more !!
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col>
            <Card
              style={{
                marginTop: "100px",
                height: "350px",
                borderRadius: "5%",
                marginBottom: "20px"
              }}
            >
              <Card.Body>
                <h6
                  style={{
                    textDecoration: "underline",
                    fontSize: "40px",
                    fontWeight: "100",
                    marginTop: "20px"
                  }}
                >
                  Pants
                </h6>
                <Card.Subtitle
                  style={{ marginTop: "50px", lineHeight: "28px" }}
                >
                  We have a huge range of latest, in-fashion pants.Stretchable,
                  Comfortable and flexible Pants are available in stock in
                  different fabrics ranges from jeans, cotton and much more !!
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <img
              style={{ borderRadius: "5%" }}
              src="/Images/jeans3.jpg"
              alt="pant"
              height="480px"
              width="400px"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col>
            <img
              style={{ borderRadius: "5%" }}
              src="/Images/tights1.jpg"
              alt="tights"
              height="480px"
              width="400px"
            />
          </Col>
          <Col>
            <Card
              style={{
                marginTop: "100px",
                height: "350px",
                borderRadius: "5%",
              }}
            >
              <Card.Body>
                <h6
                  style={{
                    textDecoration: "underline",
                    fontSize: "40px",
                    fontWeight: "100",
                    marginTop: "20px",
                  }}
                >
                  Tights
                </h6>
                <Card.Subtitle
                  style={{ marginTop: "50px", lineHeight: "28px" }}
                >
                  Good quality Tights available in different colors and fabric, 
                  you can wear it with kurties and shirts that will make the look more attractive !!
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};
