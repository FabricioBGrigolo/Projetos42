import React from "react";
import "./projectCard.scss";
import Image from "next/image";
import Button from "@/app/components/button";

export default function ProjectCard(props: any) {
  return (
    <div className="cardProject">
      <Image src={props.src} width={350} height={250} alt={props.alt} />
      <p className="techs">{props.techs}</p>
      <div className="cardPBody">
        <h2>{props.projectName}</h2>
        <p>{props.projectDescription}</p>
        <Button content={props.button} href={props.href} />
      </div>
    </div>
  );
}
