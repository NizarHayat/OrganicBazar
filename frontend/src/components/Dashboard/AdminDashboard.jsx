// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Common/sideBar';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/user/${id}`);
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="admin-dashboard-content">
        <h1>Admin Dashboard</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">View</button>
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button onClick={() => onDelete(user._id)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
