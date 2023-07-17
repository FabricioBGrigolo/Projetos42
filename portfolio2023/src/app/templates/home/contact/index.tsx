import React from "react";
import "./contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import SkillsCard from "@/app/components/skillsCard";

export default function ContactHome() {
  return (
    <section className="ctn-skills" id="about">
      <Container>
        <Row>
          <Title className title="contact" subtitle="" />
          <Col>
            <p>
              I&apos;m interested in freelance opportunities. However, if you
              have other request or question, don&apos;t hesitate to contact me
            </p>
            <SkillsCard
              title="Message me here"
              techs={[
                <i key={1} className="fa-brands fa-linkedin"></i>,
                " Fabricio Grigolo",
                <br key={2} />,
                <i key={3} className="fa-solid fa-envelope"></i>,
                " fbg.grigolo@gmail.com",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
