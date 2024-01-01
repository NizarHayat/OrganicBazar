import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDescription = () => {
  const navigate = useNavigate(); 
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const redirectToProduct = () => {
    navigate(`/productdescription/${productId}`); 
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`data:image/jpeg;base64,${product.image}`} 
            className="img-fluid"
            alt={`Product ${product.title}`}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <button className="btn btn-primary btn-sm"  onClick={redirectToProduct}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
