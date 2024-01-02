// Home.jsx
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import heroImage1 from '../assets/hero-img.jpg';
import heroImage2 from '../assets/hero-img1.jpg';
import heroImage3 from '../assets/hero.jpg';
import './Home.css'; // Import your custom CSS file
import CountdownTimer from './countdowntimer';
import FeaturedProduct from './FeaturedProduct';
import LatestProduct from './LatestProduct';
const Home = () => {
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const autoplayTimer = setTimeout(() => {
      setAutoplay(true);
    }, 3000);

    return () => clearTimeout(autoplayTimer);
  }, []);

  const handleAutoplay = () => {
    setAutoplay(false);
  };

  const swiperParams = {
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: handleAutoplay,
    },
  };

  return (
    <div>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${heroImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '800px', // Set the height according to your needs
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 201, 173, 0.7)', // Add a semi-transparent overlay if needed
            borderRadius: '10px',
            maxWidth: '95%',
            padding: '70px 50px',
            position: 'relative',
            textAlign: 'left',
            zIndex: 1,
          }}
        >
          <h1 style={{ fontSize: '60px', color: '#ff6700' }}>
            10% off on your first purchase
          </h1>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Featured Products</h2>
        </div>
        <FeaturedProduct />
      </div>

      {/* Personalized Recommendations */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Personalized Recommendations</h2>
          {/* <PersonalizedRecommendations /> */}
        </div>
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
          <LatestProduct/>
        </div>
      </div>

      {/* Browse by Categories */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Browse by Categories</h2>
          {/* Add Categories component here */}
        </div>
      </div>

      {/* Trending Products */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Trending Products</h2>
          {/* Add TrendingProduct component here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
