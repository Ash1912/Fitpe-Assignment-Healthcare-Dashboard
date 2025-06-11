import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

export default function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="dashboard-grid">
        <section className="anatomy-wrapper">
          <AnatomySection />
        </section>
        <section className="health-status-cards">
          <HealthStatusCards />
        </section>

        <section className="calendar-view">
          <CalendarView />
        </section>

        <section className="activity-feed">
          <ActivityFeed />
        </section>

        <section className="upcoming-schedule">
          <UpcomingSchedule />
        </section>
      </div>
    </main>
  );
}
