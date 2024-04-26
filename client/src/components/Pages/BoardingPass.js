import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Axios from "axios";

const BoardingPass = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:5000/showPass/${id}`).then((resp) =>
      setData({ ...resp.data[0] })
    );
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return new Date(randomDate);
  };

  return (
    <div className="boarding-pass">
      <div className="pass-header">
        <div className="pass-logo">FAST Airways</div>
        <div className="pass-title">Boarding Pass</div>
      </div>
      <div className="pass-content">
        <div className="pass-flight">
          <div className="flight-number">{data.flight_no}</div>
          <div className="flight-route">
            {data.airport_code} - {data.destination_airport_code}
          </div>
          <div className="flight-time">
            {getRandomDate().toLocaleDateString()} {getRandomDate().toLocaleTimeString()}
          </div>
        </div>
        <div className="pass-passenger">
          <div className="passenger-name">
            {data.fname}, {data.lname}
          </div>
          <div className="passenger-seat">
            Seat: {data.seat_no} <span style={{ backgroundColor: getRandomColor(), padding: "2px 5px", borderRadius: "50%", marginLeft: "10px" }}>{getRandomNumber(1, 50)}</span>
          </div>
          <div className="passenger-gate">
            Gate: {data.gate_no} <span style={{ backgroundColor: getRandomColor(), padding: "2px 5px", borderRadius: "50%", marginLeft: "10px" }}>{getRandomNumber(1, 10)}</span>
          </div>
        </div>
      </div>
      <div className="back-button">
        <Link to={`/CustomerPanel/${id}`}>
          <button className="btn btn-primary">Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default BoardingPass;