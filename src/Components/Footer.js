import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          marginTop: "150px",
          height: "500px",
          backgroundColor: "rgb(0, 0, 100)",
          paddingTop: "50px",
          //   paddingBottom: "100px",
        }}
      >
        <Row>
          <Col xs={12}>
            <h6
              style={{
                float: "left",
                margin: "10px",
                color: "white",
                fontSize: "30px",
              }}
            >
              Contact Us:{" "}
            </h6>
          </Col>
          <Col xs={12}>
            <IconContext.Provider
              value={{
                color: "white",
                style: { margin: "20px", width: "40px", height: "40px" },
              }}
            >
              <Col>
                <a href="https://www.facebook.com/qmrcollections">
                  <AiOutlineFacebook />
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/qmr_collections/">
                  <FaInstagram />
                </a>{" "}
              </Col>
              <Col>
                <FiPhone style={{}} />{" "}
              </Col>
              <Col>  
                <span style={{ color: "white", fontSize: "14px" }}>
                  {" "}
                  03408318059{" "}
                </span>
              </Col>
              <Col>
                <HiOutlineMail style={{ }} />
              </Col>
              <Col>  
                <span style={{ color: "white", fontSize: "14px" }}>
                  {" "}
                  qmrcollections@gmail.com{" "}
                </span>
              </Col>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
