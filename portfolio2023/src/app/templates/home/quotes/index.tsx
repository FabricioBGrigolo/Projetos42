import React from "react";
import "./quotes.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import CtnQuotes from "@/app/components/quotes";

export default function Home() {
  return (
    <section className="ctn-quotes">
      <Container>
        <Row>
          <Col>
            <CtnQuotes
              citation="You know, the very powerful and the very stupid have one thing in
                      common: they don’t alter their views to fit the facts. They alter the
                      facts to fit their views."
              whoSayIt="Dr. Who (4th)"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
