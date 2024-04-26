import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const WelcomePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'skyblue',  // Set background color to sky blue
    padding: '20px',  // Add padding for better aesthetics
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome, Geethika</h2>
      <p>INDIAN AIRWAYS welcomes you, have a safe and happy flight</p>
      <Link to="/">
        <a href="">GET STARTED</a>
      </Link>
      <Footer />
    </div>
  
    
  );
};

export default WelcomePage;
