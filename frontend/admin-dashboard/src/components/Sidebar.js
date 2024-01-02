// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/admin/products">Products</Link></li>
          {/* <li><Link to="/admin/orders">Orders</Link></li> */}
          <li><Link to="/admin/users">UserList</Link></li>
        </ul>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
