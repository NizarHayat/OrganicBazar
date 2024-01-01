import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
  // Sample data for featured products
  const featuredProducts = [
    { id: 1, name: 'Product 1', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Product 2', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Product 3', imageUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {featuredProducts.map((product) => (
        <div key={product.id} className="featured-product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedProducts;
