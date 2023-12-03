import React from "react";
import './Card.css'
function Card({ h2, h3 }) {
  return (
    <>
      <div>
        Card
        <h2>{h2}</h2>
        <h3>{h3}</h3>
      </div>
    </>
  );
}

export default Card;
