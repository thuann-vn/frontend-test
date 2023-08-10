import moment from 'moment/moment';
import React from 'react';

function HomeMainPhoto({ percentage }) {
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the length of the dash offset based on the percentage
  const dashOffset = circumference - (percentage / 100) * circumference;

  //Today
  const todayStr = moment().format('MM/DD')

  return (
    <div className='main-photo-container'>
      <svg className="progress-circle" width="180" height="180" viewBox="0 0 100 100">
        <circle
          className="progress-circle-background"
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className="progress-circle-bar"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />
        <text x="50" y="50" textAnchor="middle" dy="0.3em" className="progress-text">
          {todayStr} <tspan className="progress-text-percentage">{percentage}%</tspan>
        </text>
      </svg>
    </div>

  );
}

export default HomeMainPhoto;