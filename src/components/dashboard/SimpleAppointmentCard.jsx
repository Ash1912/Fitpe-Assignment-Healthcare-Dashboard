import React from 'react';
import './SimpleAppointmentCard.css';

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
      <div className="appointment-title">
        {title} <span className="icon">{icon}</span>
      </div>
      <div className="appointment-time">{time}</div>
    </div>
  );
}
