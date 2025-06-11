import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-section">
        <Header />
        <div className="dashboard-content">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}
