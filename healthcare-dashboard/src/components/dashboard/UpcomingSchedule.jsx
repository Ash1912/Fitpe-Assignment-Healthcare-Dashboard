import React from 'react';
import './UpcomingSchedule.css';
import { upcomingAppointments } from '../../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {Object.entries(upcomingAppointments).map(([day, appointments], i) => (
        <div key={i} className="schedule-day">
          <h3>{day}</h3>
          <div className="cards">
            {appointments.map((appt, j) => (
              <SimpleAppointmentCard key={j} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}