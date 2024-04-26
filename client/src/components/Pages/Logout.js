import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {
  const location = useLocation();
  const  username = location.state?.username || 'guest';

  return (
    <div>
      {  <h2>LOGOUT SUCCESSFUL</h2>}
      <h3>Thankyou User, {username}!</h3>
    </div>
  );
};

export default Logout;
