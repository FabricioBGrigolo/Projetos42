import React from "react";
import "./intro.scss";
import "../../../library/scss/globals.scss";
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/app/components/title";
import ProjectCard from "@/app/components/projectCard";

import portfolio from "@/app/library/images/portfolio.png";
import dealsRiders from "@/app/library/images/DealsRiders.png";
import mahalSurfSpirit from "@/app/library/images/mahaSurfSpirit.png";
import iliteERP from "@/app/library/images/IliteERP.png";
import iliteSite from "@/app/library/images/IliteSite.png";
import animaisFantasticos from "@/app/library/images/AnimaisFantasticos.png";

export default function ProjectsProjects() {
  return (
    <section className="ctn-apps">
      <Container>
        <Row className="um">
          <Title title="complete-apps" />
          <Col>
            <ProjectCard
              src={portfolio}
              techs="React Next.js ReactRouterDOM React-Bootstrap SCSS"
              projectName="Portfolio"
              projectDescription="Website to showcase my other created projects"
              button="Github <~>"
            />
            <ProjectCard
              src={animaisFantasticos}
              techs="HTML CSS Javascript"
              projectName="Portfolio"
              projectDescription="Website created during the Javascript course for beginners"
              button="Live <~>"
            />
          </Col>
          <Col>
            <ProjectCard
              src={mahalSurfSpirit}
              techs="Wordpress PHP SCSS HTML"
              projectName="Mahal Surf Spirit"
              projectDescription="Surf and Skate news site"
              button="In progress"
            />
          </Col>
          <Col>
            <ProjectCard
              src={dealsRiders}
              techs="HTML CSS Javascript"
              projectName="Deals Riders"
              projectDescription="An HTML And CSS Course Project For Beginners"
              button="Live <~>"
            />
          </Col>
        </Row>
        <Row className="dois">
          <Title title="providing-maintenance" />
          <Col>
            <ProjectCard
              src={iliteERP}
              techs="Angular Typescript SCSS"
              projectName="Ilite ERP"
              projectDescription="ERP for micro entrepreneurs"
              button="unavailable for demo"
            />
          </Col>
          <Col>
            <ProjectCard
              src={iliteSite}
              techs="React Next.js Typescript"
              projectName="Ilite startup website"
              projectDescription="Institutional website of Ilite ERP"
              button="Live <~>"
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}
