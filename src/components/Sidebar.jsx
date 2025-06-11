import React from "react";
import "./Sidebar.css";
import { navLinks } from "../data/navLinks";
import {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
} from "lucide-react";

const iconMap = {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
};

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo mb-6 px-2">
        <h1 className="text-2xl font-bold">
          <span style={{ color: "#06b6d4" }}>Health</span>
          <span style={{ color: "#1e293b" }}>care.</span>
        </h1>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-heading">General</h4>
        <ul>
          {navLinks.general.map((link, i) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={i} className="nav-item">
                {Icon && <Icon className="nav-icon" />}
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-section">
        <h4 className="sidebar-heading">Tools</h4>
        <ul>
          {navLinks.tools.map((link, i) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={i} className="nav-item">
                {Icon && <Icon className="nav-icon" />}
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
