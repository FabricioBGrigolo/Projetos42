import React from "react";
import "./title.scss";

export default function titleInternal(props: any) {
  return (
    <div className="titleInternal">
      <h1>
        <span>/</span>
        {props.title}
      </h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
