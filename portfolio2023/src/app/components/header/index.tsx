"use client";

import React from "react";
import "./header.scss";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "../../library/fonts/font.scss";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-evelyn">
          <Navbar.Brand href="#home">Fabrício</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">
              <span>~</span> home
            </Nav.Link>
            <Nav.Link href="#features">
              <span>#</span> works
            </Nav.Link>
            <Nav.Link href="#pricing">
              <span>#</span> about-me
            </Nav.Link>
            <Nav.Link href="#pricing">
              <span>#</span> contacts
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Navbar expand={"lg"} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#action2">
                  <i className="fa-brands fa-github fa-xl"></i>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}

      <div className="icons">
        <span className="line"></span>
        <i className="fa-brands fa-github fa-xl"></i>
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </div>
    </header>
  );
}
