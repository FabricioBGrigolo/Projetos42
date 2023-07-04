import React from "react";
import Intro from "./intro";
import Quotes from "./quotes";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Quotes />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
