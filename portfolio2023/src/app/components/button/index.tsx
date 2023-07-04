import React from "react";
import "./button.scss";

export default function Button(props: any) {
  return (
    <a className="btnPrimary" href={props.href}>
      {props.content}
    </a>
  );
}
