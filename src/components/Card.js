import React from "react";
import UserImg from "../undraw_Male_avatar_g98d.png";
import "../Card.css";


export default function Card() {
  return (
    <div className="card">
      <img src={UserImg} alt="Card" width="50px" />
      <div className="card-content">
        <h2>Olusola Itunu</h2>
        <p>Fullstack software Develpoer.</p>
      </div>
    </div>
  );
}
