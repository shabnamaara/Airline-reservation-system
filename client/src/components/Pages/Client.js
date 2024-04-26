import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const ClientComponent = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', email: '', password: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/retrive');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8080/users/${id}`, formData);
      fetchData();
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Sidebar />
      <div style={{ backgroundColor: '#ADD8E6', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'gray' }}>Users</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: 'gray', color: 'white' }}>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Role</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Password</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.role}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.password}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="New Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="New Role"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="New Email"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={handleChange}
                  />
                  <button onClick={() => handleUpdate(user._id)}>Update</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientComponent;
