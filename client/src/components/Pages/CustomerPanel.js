import React from "react";
import { useLocation } from 'react-router-dom';

const CustomerPanel = () => {
  const location = useLocation();
  const username = location.state?.username || 'guest';

  return (
    <div>
      <h2>SIGN IN SUCCESSFUL</h2>
      <h3>Welcome, {username}!</h3>
      <h4 style={{ fontSize: '20px' }}>
        Welcome to INDIAN AIRWAYS, we are glad to see you today, have a happy booking and a safe travel
      </h4>
    </div>
  );
};

export default CustomerPanel;
