import React from 'react';
import './AnatomySection.css';
import { healthIndicators } from '../../data/healthData';
import Anatomy from '../../assets/Anatomy.jpg'; // ✅ Corrected import path

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={Anatomy} alt="Anatomy" className="anatomy-img" />
      {healthIndicators.map((item, i) => (
        <span key={i} className={`indicator ${item.position}`}>{item.label}</span>
      ))}
    </div>
  );
}
