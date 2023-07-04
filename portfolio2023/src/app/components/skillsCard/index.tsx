import React from "react";
import "./skillsCard.scss";

export default function SkillsCard(props: any) {
  return (
    <div className="cardSkills">
      <h3>{props.title}</h3>
      <p>{props.techs}</p>
    </div>
  );
}
