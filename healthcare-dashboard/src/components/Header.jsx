import React from 'react';
import './Header.css';
import { Bell, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="header-right">
        <Bell className="icon" />
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
          <span className="username">Dr. Smith</span>
        </div>
        <button className="add-btn">
          <Plus />
        </button>
      </div>
    </header>
  );
}