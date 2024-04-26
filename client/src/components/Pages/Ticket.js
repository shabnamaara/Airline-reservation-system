import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const Ticket = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    // Sample data
    const sampleData = [
      { ticket_id: 1, seat_no: 'A1', departure_time: '2024-04-27 12:00:00', gate_no: 'G1', airport_code: 'ABC' },
      { ticket_id: 2, seat_no: 'B2', departure_time: '2024-04-27 15:00:00', gate_no: 'G2', airport_code: 'DEF' },
      { ticket_id: 3, seat_no: 'C3', departure_time: '2024-04-27 10:30:00', gate_no: 'G3', airport_code: 'GHI' },
    ];

    // Set sample data to state
    setData(sampleData);

    // Load actual data from API
    // const response = await Axios.get('http://localhost:5000/ticket/api/get');
    // setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Sidebar />
      <div>
        <button style={{ width: "120px", marginLeft: "810px", visibility: "hidden" }} className='btn btn-client'></button>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Ticket ID</th>
              <th style={{ textAlign: 'center' }}>Seat No</th>
              <th style={{ textAlign: 'center' }}>Departure Time</th>
              <th style={{ textAlign: 'center' }}>Gate No</th>
              <th style={{ textAlign: 'center' }}>Airport Code</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.ticket_id}</td>
                  <td>{item.seat_no}</td>
                  <td>{item.departure_time}</td>
                  <td>{item.gate_no}</td>
                  <td>{item.airport_code}</td>
                  <td>
                    <Link to={`/ViewTicket/${item.ticket_id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ticket;
