import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const  username = location.state?.username || 'guest';

  return (
    <div>
      {  <h2>SIGN IN SUCCESSFUL</h2>}
      <h3>Welcome, {username}!</h3>
    </div>
  );
};

export default HomePage;
