import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentSuccessPage() {
  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url(${require("../../images/about1.jpg")})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card px-4" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
        <p className="h8 py-3 text-center">Namaste Geethika </p>
        <p className="h8 py-3 text-center">
          <i className="fas fa-check-circle text-success"></i> Payment has been completed.
        </p>
        <p className="h8 py-3 text-center">Thank you for booking with Bharat Airways!</p>
        <div className="text-center">
          <Link to="/Ticket" className="btn btn-primary mb-3">
            View Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}