import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import OrderManagement from './components/OrderManagement';
import UserList from './components/UserList';
import UserUpdate from './components/UserUpdate';
import UserView from './components/UserView';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
 
  const handleUpdateComplete = () => {
 
    console.log('Update complete!');
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route
            path="/admin/userview/:id"
            element={<UserView />}
          />
          <Route
            path="/admin/userupdate/:id"
            element={
              <UserUpdate
               
                onUpdate={handleUpdateComplete}
              />
            }
          />
          <Route path="/updateproduct/:productId" element={<UpdateProduct onUpdate={handleUpdateComplete} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
