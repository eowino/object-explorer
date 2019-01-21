import React from "react";

function Card({ property, result }) {
  return (
    <a
      className="card"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://mdn.io/${encodeURI(property)}`}
    >
      <span className="card__prop">{property}</span>
      <span className="card__result">{result}</span>
      <span>Click to see documentation</span>
    </a>
  );
}

export default Card;
