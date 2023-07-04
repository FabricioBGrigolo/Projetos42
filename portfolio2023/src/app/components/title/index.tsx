import React from "react";
import "./title.scss";

export default function title(props: any) {
  return (
    <div className="title">
      <h1>
        <span>#</span>
        {props.title}
        <span className="line"></span>
      </h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
