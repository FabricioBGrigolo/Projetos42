import React from "react";
import "./about.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import Button from "@/app/components/button";

export default function Skills() {
  return (
    <section className="ctn-skills">
      <Container>
        <Row>
          <Col>
            <Title className title="about" subtitle="" />
            <p>
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
            <Button content="Read more ->" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
