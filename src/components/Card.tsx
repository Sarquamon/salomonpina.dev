import React from "react";

interface cardProps {
  cardTitle: string;
  cardDesc: string;
  cardImage: string;
  journeysCount: number;
}

export default function Card({
  cardTitle,
  cardDesc,
  cardImage,
  journeysCount,
}: cardProps) {
  return (
    <div className="card">
      <img src={cardImage} alt={cardTitle} className="card-image" />
      <h3 className="card-title">{cardTitle}</h3>
      <div className="card-content">
        <p>{cardDesc}</p>
      </div>
      <div className="card-info">
        <div>{journeysCount}</div>
        <div>
          <a href="#" className="card-link">
            Go to {cardTitle} journeys
          </a>
        </div>
      </div>
    </div>
  );
}
