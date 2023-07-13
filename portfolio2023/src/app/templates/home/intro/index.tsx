import React from "react";
import "./intro.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import introImage from "../../../library/images/Intro-img.png";
import Button from "../../../components/button";
import Currently from "../../../components/current";

export default function IntroHome() {
  return (
    <section className="ctn-intro">
      <Container>
        <Row>
          <Col className="um d-flex flex-column justify-content-around align-items-start ms-5">
            <h1>
              I&apos;m a <span>Front-End Developer</span> and studying to be{" "}
              <span>Full-stack</span>
            </h1>
            <p>
              Crafting responsive websites where technologies meet creativity
            </p>
            <Button content="Contact me!!" />
          </Col>
          <Col className="dois d-flex flex-column justify-content-center align-items-center">
            <Image
              src={introImage}
              alt="Estatua com bola inflada de chiclete na boca"
              width={425}
              height={400}
            />
            <Currently />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
