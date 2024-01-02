import React from 'react';

const UserView = ({ selectedUser }) => {
  return (
    <div>
      <h2>User Details</h2>
      {selectedUser ? (
        <div>
          <p>ID: {selectedUser._id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Role: {selectedUser.role}</p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
};

export default UserView;
