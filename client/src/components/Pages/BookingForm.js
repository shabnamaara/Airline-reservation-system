import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreditCardPaymentForm() {
  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url(${require("../../images/about1.jpg")})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card px-4" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
        <p className="h8 py-3 text-center">PAYMENT</p>
        <div className="row gx-3">
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Person Name</p>
              <input className="form-control mb-3" type="text" placeholder="Name" defaultValue="Barry Allen" />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Card Number</p>
              <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <p className="text mb-1">Expiry</p>
              <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <p className="text mb-1">CVV/CVC</p>
              <input className="form-control mb-3 pt-2" type="password" placeholder="***" />
            </div>
          </div>
          <div className="col-12">
            <Link to="/Successs">
              <button className="btn btn-primary mb-3">
                <span className="ps-3">Pay $243</span>
                <span className="fas fa-arrow-right"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}