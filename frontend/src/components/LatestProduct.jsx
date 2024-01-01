import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const driedFruits = response.data.filter((product) => product.category === 'Dried Fruits');
        setProducts(driedFruits);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const redirectToProduct = (productId) => {
    navigate(`/productdescription/${productId}`);
  };



  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-12 col-lg-3 mb-4" key={product._id}>
            <div className="card">
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                className="card-img-top"
                alt={`Product ${product.title}`}
                style={{ height: '200px', objectFit: 'cover', borderRadius: '5px 5px 0 0' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> {product.stock}
                </p>
                <button className="btn btn-primary" onClick={() => redirectToProduct(product._id)}>
                  Buy Now
                </button>
                <button
                  className="btn btn-outline-secondary ms-2"
             
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
