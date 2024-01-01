import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from '../AddProduct';
import UpdateProduct from '../UpdateProduct';

const CustomerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdateProduct = (productId) => {
    setSelectedProductId(productId);
    setShowUpdateProductForm(true);
  };

  const handleUpdateComplete = () => {
    setShowUpdateProductForm(false);
    fetchProducts();
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Customer Dashboard</h2>

      {/* Add Product Button */}
      <div className="mb-4">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setShowAddProductForm(!showAddProductForm)}
        >
          {showAddProductForm ? 'Hide' : 'Show'} Add Product Form
        </button>
      </div>

      {/* Display AddProduct Form if showAddProductForm is true */}
      {showAddProductForm && (
        <div className="mb-4">
          <AddProduct onProductAdded={fetchProducts} />
        </div>
      )}

      {/* Display Products */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleUpdateProduct(product._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display UpdateProduct Form if showUpdateProductForm is true */}
      {showUpdateProductForm && selectedProductId && (
        <div className="mb-4">
          <UpdateProduct
            productId={selectedProductId}
            onUpdate={handleUpdateComplete}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
