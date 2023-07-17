import React from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import ProjectCard from "@/app/components/projectCard";

import portfolio from "@/app/library/images/portfolio.png";
import dealsRiders from "@/app/library/images/DealsRiders.png";
import animaisFantasticos from "@/app/library/images/AnimaisFantasticos.png";

export default function ProjectsHome() {
  return (
    <section className="ctn-projects">
      <Container>
        <Title
          className
          title="projects"
          subtitle={<a href="/projects">View All ⟶</a>}
        />
        <Row className="justify-content-center align-items-center">
          <Col>
            <ProjectCard
              src={portfolio}
              techs="React Next.js React-Bootstrap SCSS"
              projectName="Portfolio"
              projectDescription="Site para mostrar meus outros projetos criados"
              button="Github <~>"
              href="https://github.com/fbgrigolo/Projetos42/tree/portfolio/portfolio2023"
            />
          </Col>
          <Col>
            <ProjectCard
              src={animaisFantasticos}
              techs="HTML CSS Javascript"
              projectName="Portfolio"
              projectDescription="Website created during the Javascript course for beginners"
              button="Live <~>"
              href="https://fbgrigolo.github.io/Projetos42/FantasticAnimals/"
            />
          </Col>
          <Col>
            <ProjectCard
              src={dealsRiders}
              techs="HTML CSS Javascript"
              projectName="Deals Riders"
              projectDescription="Um projeto do curso HTML E CSS para iniciantes"
              button="Live <~>"
              href="https://fbgrigolo.github.io/Projetos42/DealsRiders/"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
