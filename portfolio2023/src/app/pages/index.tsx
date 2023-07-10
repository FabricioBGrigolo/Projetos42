import React from "react";
import Intro from "@/app/templates/home/intro";
import Quotes from "@/app/templates/home/quotes";
import Projects from "@/app/templates/home/projects";
import Skills from "@/app/templates/home/skills";
import About from "@/app/templates/home/about";
import Contact from "@/app/templates/home/contact";

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
