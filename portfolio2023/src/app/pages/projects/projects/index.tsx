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
          <Col>
            <TitleInternal title="projects" subtitle="List of my projects" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
