import React from "react";
import "./footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import "../../../library/fonts/font.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="um">
            <div className="communication">
              <h1>Fabrício</h1>

              <p>fbc.grigolo@gmail.com</p>
            </div>

            <p>Front-end Developer and forever Student</p>
          </Col>
          <Col className="dois">
            <h3>Media</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/fbgrigolo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fbcgrigolo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
              </li>
              {/* <li>
                <a href="">
                  <i className="fa-brands fa-discord fa-2xl"></i>
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
        <p className="copyleft">🄯 Copyleft 2023. Coded by Fabrício</p>
      </Container>
    </footer>
  );
}
