import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const Airplane = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch airplane data when the component mounts
    loadData();
  }, []);

  // Sample airplane data
  const sampleData = [
    { airplane_id: 'A001', max_seats: 200 },
    { airplane_id: 'A002', max_seats: 250 },
    { airplane_id: 'A003', max_seats: 180 },
    { airplane_id: 'A004', max_seats: 220 },
    { airplane_id: 'A005', max_seats: 190 },
  ];

  // Function to load airplane data
  const loadData = async () => {
    // Simulate fetching data from the server
    // Replace this with your actual API call
    setData(sampleData);
  };

  // Function to delete an airplane
  const delAirplane = (id) => {
    if (window.confirm(`Do you really want to delete Airplane with Airplane ID ${id}?`)) {
      // Simulate deleting the airplane
      // Replace this with your actual delete API call
      toast.success('Airplane deleted successfully!');
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <>
      <Sidebar />
      <div>
        <Link to="/AddEditAirplane">
          <button style={{ width: "120px", marginLeft: "810px" }} className='btn btn-client'>Add Airplane</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>S. No</th>
              <th style={{ textAlign: 'center' }}>Airplane ID</th>
              <th style={{ textAlign: 'center' }}>Max Seats</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.airplane_id}</td>
                  <td>{item.max_seats}</td>
                  <td>
                    <Link to={`/UpdateAirplane/${item.airplane_id}`}>
                      <button className='btn btn-edit'>Edit</button>
                    </Link>
                    <button className='btn btn-delete' onClick={() => delAirplane(item.airplane_id)}>Delete</button>
                    <Link to={`/ViewAirplane/${item.airplane_id}`}>
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

export default Airplane;
