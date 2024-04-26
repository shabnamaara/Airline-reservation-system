import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{marginTop:"10%"}}>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Your Visit Made Our Day!
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              <b>"Happy Flight with INDIAN AIRWAYS"</b>
            </p>
          </section>

          <section>
            <Link to={`/AddReviews/:id`} className="btn btn-primary">Add Review</Link>
          </section>

        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2024 Copyright: All rights are reserved!
        </div>
      </footer>
    </div>
  );
};

export default Footer;
