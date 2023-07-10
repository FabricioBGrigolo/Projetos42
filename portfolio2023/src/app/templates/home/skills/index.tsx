import React from "react";
import "./skills.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import logos from "@/app/library/images/logos.svg";
import Image from "next/image";
import SkillsCard from "@/app/components/skillsCard";

export default function Skills() {
  return (
    <section className="ctn-skills">
      <Container>
        <Row>
          <Title className title="skills" subtitle="" />
          <Col className="um">
            <Image
              src={logos}
              alt="Ilustrações visuais"
              width={600}
              height={400}
            />
          </Col>
          <Col className="dois d-flex justify-content-center align-items-start gap-3">
            <Col>
              <SkillsCard title="Languages" techs="Javascript Typescript" />
            </Col>
            <Col className="d-flex justify-content-start align-items-start flex-column gap-3">
              <SkillsCard title="Databases" techs="none for now" />
              <SkillsCard title="Tools" techs="VSCode CLI Linux Git Github" />
            </Col>
            <Col className="d-flex justify-content-start align-items-start flex-column gap-3">
              <SkillsCard title="Other" techs="HTML CSS SCSS Wordpress" />
              <SkillsCard title="Frameworks" techs="React Next.js" />
              <SkillsCard
                title="interest in"
                techs="Cybersecurity Computer-Science"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
