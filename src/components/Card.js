import React from "react";
import Eth from "../images/icon-ethereum.svg";
import Time from "../images/icon-clock.svg"
import "../Card.css";

export default function Card(props) {
  const imageSrc = `https://random.imagecdn.app/500/${props.zipcode.slice(-3)}`;
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" />
      <div className="card-content">
        <h2>{props.name}</h2>
        <p className="phrase">{props.phrase}.</p>
        <hr />
        <p className="company">
          <img src={imageSrc} alt="profile" />
          Engineer At: <span> {props.company}</span>
        </p>
      </div>
    </div>
  );
}
