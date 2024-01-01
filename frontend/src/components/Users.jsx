import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const data = response.data;
      setUsers(data);
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

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/user/${selectedUser._id}`, editedUser);

      const updatedUser = response.data;

  
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === updatedUser._id ? updatedUser : user))
      );


      setSelectedUser(null);
      setEditedUser({
        name: '',
        email: '',
        phone: '',
        role: '',
      });
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const onEdit = (user) => {
    setSelectedUser(user);
    setEditedUser({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-striped table-responsive">
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
                  <Link to={`/edituser/${user._id}`} className="btn btn-primary btn-sm">
                    Edit
                  </Link>
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

      {selectedUser && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <h2>Edit User</h2>
            <form>
         
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary" onClick={handleEdit}>
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedUser(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
