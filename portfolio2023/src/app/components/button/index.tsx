import React from "react";
import "./button.scss";

export default function Button(props: any) {
  return (
    <a
      className="btnPrimary"
      href={props.href}
      target={`_${props.target ?? "blank"}`}
    >
      {props.content}
    </a>
  );
}
