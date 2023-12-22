import React from 'react';
import LatestProduct from './LatestProduct';
import TrendingProduct from './TrendingProduct';
import Categories from './Categories';
import heroImage from '../assets/hero-img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
  const containerStyle = {
    height: '429px',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  return (
    <div>
      <div className='home-container' style={containerStyle}>
        <div className="input-group stylish-input-group">
          <input
            type='text'
            placeholder='Search'
            className='form-control search-box'
          />
          <span className='input-group-addon'>
            <button className="btn btn-outline-light btn-icon" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </span>
        </div>
      </div>
      <div className="latest-products mt-4">
        <div className="container">
          <div className='text-center latest'>
            <h2>Latest Products</h2>
          </div>
          <LatestProduct />
        <div className="text-center mt-5 browsebycatagories">
          <h2>Browse by catagories</h2>
          <Categories />
        </div>

          <div className='text-center mt-5 Trending'>
            <h2>Trending Products</h2>
          </div>
          <TrendingProduct />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
