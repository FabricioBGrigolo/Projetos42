import React from "react";
import "./quotes.scss";
import Quotes from "../../library/images/quotes.svg";
import Image from "next/image";

export default function CtnQuotes(props: any) {
  return (
    <section className="quotes d-flex flex-column justify-content-center align-items-end">
      <div>
        <Image
          className="quote1"
          src={Quotes}
          alt="Quotes"
          width={35}
          height={35}
        />
        <p className="citation">{props.citation}</p>
        <Image
          className="quote2"
          src={Quotes}
          alt="Quotes"
          width={35}
          height={35}
        />
      </div>
      <p className="whoSayIt">- {props.whoSayIt}</p>
    </section>
  );
}
