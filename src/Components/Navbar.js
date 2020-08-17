import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './../App.css';

export const AppNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src="./../Images/logo_.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          QMR Collections
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/products" className="link">
            Products
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
