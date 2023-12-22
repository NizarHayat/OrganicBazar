import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [contacts, setContacts] = useState([]);

  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/contact');
        const data = response.data.contacts;
        setContacts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // const onEdit =async () =>{
    //   // const response = await axios.put(`http://localhost:3001/contact/${id}`);
    //   // const data = response.data.contacts;
    //   setContacts(data);
    // }
    const onDelete = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:3001/contact/${id}`);
        if (response.status === 200) {
          fetchData();
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    };

    useEffect(() => {
    fetchData();
  }, []);


  



  
  return (
    <div className='container'>
      
      {Array.isArray(contacts) && contacts.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Hobbies</th>
              <th>Gender</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.age}</td>
                <td>{contact.hobbies}</td>
                <td>{contact.gender}</td>
                <td>{contact.message}</td>
                <td>
                    <button className='btn btn-primary btn-sm'>Edit</button>
                    <button onClick={() => onDelete(contact._id)} className='btn btn-danger btn-sm ms-2'>
  Delete
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Admin;
