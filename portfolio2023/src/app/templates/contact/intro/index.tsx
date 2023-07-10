import React from "react";
import "./intro.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import TitleInternal from "@/app/components/titleInternal";
import SkillsCard from "@/app/components/skillsCard";

export default function Home() {
  return (
    <section className="ctn-intro">
      <Container>
        <Row>
          <TitleInternal title="contacts" subtitle="Who am i?" />
          <Col>
            <p>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </Col>
          <Col>
            <SkillsCard
              title="Message me here"
              techs={[
                <i key={1} className="fa-brands fa-discord"></i>,
                " DiscordAccount",
                <br key={2} />,
                <i key={3} className="fa-solid fa-envelope"></i>,
                " fbg.grigolo@gmail.com",
                <br key={4} />,
                <i key={5} className="fa-brands fa-linkedin"></i>,
                "Fabrício Grigolo",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
