import React from "react";
import "./intro.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import TitleInternal from "@/app/components/titleInternal";

export default function Home() {
  return (
    <section className="ctn-intro">
      <Container>
        <Row>
          <TitleInternal title="about-me" subtitle="Who am i?" />
          <Col>
            <p className="introText">
              Hello, I&apos;am Fabrício!
              <br />
              <br />
              I&apos;m a self-taught front-end developer based in Brazil.
              Developing responsive websites from scratch. Working as an intern
              in web development at a marketing agency and doing freelance work
              for a software company as a junior developer.
              <br />
              <br />
              Very interested in technology, mainly cyber security, which is my
              next goal after reaching my seniority in software development.
              <br />
              <br />
              Daily been studying english, software development and
              cybersecurity.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
