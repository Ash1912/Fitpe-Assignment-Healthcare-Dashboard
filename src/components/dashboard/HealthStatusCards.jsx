import React from 'react';
import './HealthStatusCards.css';
import { healthCards } from '../../data/healthData';

export default function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, i) => (
        <div className="card" key={i}>
          <div className="card-content">
            <div className="card-header">
              <img src={card.icon} alt={card.title} className="card-icon" />
              <h3>{card.title}</h3>
            </div>
            <p className="card-date">Date: {card.date}</p>
            <div className="status-bar">
              <div className={`status-fill ${card.status}`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
