import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          marginTop: "50px",
          margin: "0",
          height: "400px",
          backgroundColor: "rgb(0, 0, 100)",
        }}
      >
        <Row>
          <Col xs={12}>
            <h6 style={{ margin: "50px", color: "white", fontSize: "30px" }}>
              Contact Us:{" "}
            </h6>
            <IconContext.Provider
              value={{
                color: "white",
                style: { margin: "30px", width: "50px", height: "50px" },
              }}
            >
              <a href="https://www.facebook.com/qmrcollections">
                <AiOutlineFacebook />
              </a>
              <a href="https://www.instagram.com/qmr_collections/">
                <FaInstagram />
              </a>
              <br />

              <h6>
                {" "}
                <FiPhone />{" "}
                <span style={{ color: "white", fontSize: "16px" }}>
                  {" "}
                  03462772919{" "}
                </span>
              </h6>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
