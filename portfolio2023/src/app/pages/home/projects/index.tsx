import React from "react";
import "./projects.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import ProjectCard from "@/app/components/projectCard";
import { Link } from "react-router-dom";

import portfolio from "@/app/library/images/portfolio.png";
import dealsRiders from "@/app/library/images/DealsRiders.png";
import mahalSurfSpirit from "@/app/library/images/mahaSurfSpirit.png";

export default function Home() {
  return (
    <section className="ctn-projects">
      <Container>
        <Title
          className
          title="projects"
          subtitle={<Link to={"/projects"}>View All ⟶</Link>}
        />
        <Row className="justify-content-center align-items-center">
          <Col>
            <ProjectCard
              src={portfolio}
              techs="React Next.js ReactRouterDOM React-Bootstrap SCSS"
              projectName="Portfolio"
              projectDescription="Site para mostrar meus outros projetos criados"
              button="Github <~>"
            />
          </Col>
          <Col>
            <ProjectCard
              src={mahalSurfSpirit}
              techs="Wordpress PHP SCSS HTML"
              projectName="Mahal Surf Spirit"
              projectDescription="Site de notícias sobre Surf e Skate"
              button="Live <~>"
            />
          </Col>
          <Col>
            <ProjectCard
              src={dealsRiders}
              techs="HTML CSS Javascript"
              projectName="Deals Riders"
              projectDescription="Um projeto do curso HTML E CSS para iniciantes"
              button="Live <~>"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
