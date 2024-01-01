import React from 'react';
import LatestProduct from './LatestProduct';
import TrendingProduct from './TrendingProduct';
import Categories from './Categories';
import heroImage from '../assets/hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import CountdownTimer from './countdowntimer';
import FeaturedProduct from './FeaturedProduct';
// import PersonalizedRecommendations from './PersonalizedRecommendations';
const Home = () => {
  const containerStyle = {
    height: '580px',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    color: 'white',
  };

  return (
    <div>
      <div className="home-container" style={containerStyle}>
        <div className="input-group stylish-input-group">
          <input
            type="text"
            placeholder="Search"
            className="form-control search-box"
          />
          <span className="input-group-addon">
            <button className="btn btn-outline-light btn-icon" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </span>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Featured Products</h2>
        </div>
       <FeaturedProduct/>
      </div>

      {/* Personalized Recommendations */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Personalized Recommendations</h2>
        </div>
      {/* <PersonalizedRecommendations/> */}
      </div>

      <div className="container mt-5">
  <div className="text-center mb-4">
    <h2 className="section-title">Sale Ends In:</h2>
    <CountdownTimer endTime={new Date('2023-01-01T00:00:00')} />
  </div>
</div>

      {/* Latest Products */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Latest Products</h2>
        </div>
        <LatestProduct />
      </div>

      {/* Browse by Categories */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Browse by Categories</h2>
        </div>
        <Categories />
      </div>

      {/* Trending Products */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Trending Products</h2>
        </div>
        <TrendingProduct />
      </div>
    </div>
  );
};

export default Home;
