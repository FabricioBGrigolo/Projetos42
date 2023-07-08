import React from "react";
import "./intro.scss";
import "../../../library/scss/globals.scss";
import { Container, Row } from "react-bootstrap";
import Title from "@/app/components/title";
import SkillsCard from "@/app/components/skillsCard";

export default function skills() {
  return (
    <section className="skillsAbout">
      <Container>
        <Row className="um">
          <Title title="skills" />
          <Row className="dois">
            <SkillsCard title="Languages" techs="Javascript Typescript" />
            <SkillsCard title="Databases" techs="none for now" />
            <SkillsCard title="Tools" techs="VSCode CLI Linux Git Github" />
            <SkillsCard title="Other" techs="HTML CSS SCSS Wordpress" />
            <SkillsCard title="Frameworks" techs="React Next.js" />
          </Row>
        </Row>
      </Container>
    </section>
  );
}
