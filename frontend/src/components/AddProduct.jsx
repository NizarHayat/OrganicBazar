import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
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
 
      console.log('Image file:', e.target.files[0]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: e.target.files[0],
      }));
    } else {
   
      console.log('Other field:', e.target.name, e.target.value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    }
  

    console.log('FormData before submission:', formData);
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
  
      // Append the image file if available
      if (formData.image) {
        formDataToSend.append('image', formData.image, formData.image.name);
      }
  
      console.log('Submitting product data:', formDataToSend);
  
      await axios.post('http://localhost:3001/products', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onProductAdded();
  
  
      setFormData({
        title: '',
        description: '',
        image: null,
        price: 0,
        category: 'Dried Fruits',
        stock: 0,
      });
    } catch (error) {
      console.error('Error adding product:', error.message);
      console.log('Error details:', error.response.data);
    }
  };
  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Product</h2>
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
          <textarea
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
            accept="image/*" 
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
          <label className="form-label">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="Dried Fruits">Dried Fruits</option>
            <option value="Gemstones">Gemstones</option>
            <option value="Handicraft">Handicraft</option>
            <option value="General Category">General Category</option>
          </select>
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
