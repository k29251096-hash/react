import React from 'react';

const Alert = ({ activeCases }) => {
  // Conditional Alert: Active cases 100,000 மேல் இருந்தால் High Risk
  const isHighRisk = activeCases > 100000;

  return (
    <div className={`alert-box ${isHighRisk ? 'danger' : 'safe'}`}>
      {isHighRisk ? (
        <p>⚠️ <strong>High-Risk Zone:</strong> This area has a high number of active health cases ({activeCases.toLocaleString()}). Please follow safety protocols.</p>
      ) : (
        <p>✅ <strong>Moderate/Low Risk:</strong> Active cases ({activeCases.toLocaleString()}) are under controlled limits.</p>
      )}
    </div>
  );
};

export default Alert;