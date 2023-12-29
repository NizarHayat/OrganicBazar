import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = ({ productId, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    price: 0,
    category: 'Dried Fruits',
    stock: 0,
  });

  const onChange = (e) => {
    if (e.target.name === 'image') {
     
      setFormData({ ...formData, image: e.target.files[0] });
    } else {

      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('stock', formData.stock);

     
      if (formData.image) {
        formDataToSend.append('image', formData.image, formData.image.name);
      }

      console.log('Updating product with ID:', productId);

      await axios.put(`http://localhost:3001/products/${productId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      onUpdate();
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Update Product</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            name="image"
            onChange={onChange}
            className="form-control"
            accept="image/*" // Accept only image files
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
