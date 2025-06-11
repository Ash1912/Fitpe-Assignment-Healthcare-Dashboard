import React from "react";
import "./ActivityFeed.css";

const ActivityFeed = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const appointmentCount = 3;

  // Mock data: Each day has 4 bar heights (can vary)
  const data = [
    [60, 30, 50, 20],
    [50, 20, 40, 35],
    [40, 25, 35, 15],
    [45, 25, 50, 20],
    [70, 40, 50, 25],
    [55, 20, 30, 40],
    [65, 35, 45, 30]
  ];

  const colors = ["#60A5FA", "#6366F1", "#CBD5E1", "#A78BFA"];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtext">{appointmentCount} appointment on this week</p>
      </div>
      <div className="activity-chart">
        {days.map((day, index) => (
          <div className="chart-bar" key={index}>
            <div className="bar-group">
              {data[index].map((height, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{
                    height: `${height}px`,
                    backgroundColor: colors[i % colors.length]
                  }}
                />
              ))}
            </div>
            <span className="bar-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
