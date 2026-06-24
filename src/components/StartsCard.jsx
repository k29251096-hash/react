import React from 'react';


const StatsCard = ({ data, countryName }) => {
  return (
    <div className="stats-container">
      <h2>Stats for: <span className="country-title">{countryName}</span></h2>
      <div className="stats-grid">
        <div className="card cases">
          <h3>Total Cases</h3>
          <p>{data.cases?.toLocaleString() || 'N/A'}</p>
          <span className="today">Today: +{data.todayCases?.toLocaleString()}</span>
        </div>
        <div className="card recovered">
          <h3>Recovered</h3>
          <p>{data.recovered?.toLocaleString() || 'N/A'}</p>
          <span className="today">Today: +{data.todayRecovered?.toLocaleString()}</span>
        </div>
        <div className="card deaths">
          <h3>Deaths</h3>
          <p>{data.deaths?.toLocaleString() || 'N/A'}</p>
          <span className="today">Today: +{data.todayDeaths?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;