import React, { useState } from 'react';
import './CalendarView.css';
import { calendarData } from '../../data/calendarAppointments';

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState('26');
  const [selectedSlot, setSelectedSlot] = useState('09:00');

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="nav-buttons">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day, i) => (
          <div
            key={i}
            className={`calendar-day ${day.date === selectedDate ? 'active-day' : ''}`}
            onClick={() => setSelectedDate(day.date)}
          >
            <span className="date">{day.date}</span>
            <div className="slots">
              {day.slots.map((slot, j) => (
                <span
                  key={j}
                  className={`slot ${slot === selectedSlot && day.date === selectedDate ? 'active-slot' : ''}`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-cards">
        <div className="appointment-card dentist">
          <h4>Dentist 🦷</h4>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card physio">
          <h4>Physiotherapy Appointment 💪</h4>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}
