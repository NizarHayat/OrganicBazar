import React from 'react';

const Categories = () => {
  return (
    <div className='container mt-4'>
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      <div className='col'>
        <div className='card h-100'>
          <img
            src='https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='card-img-top'
            alt='Dried Fruits'
          />
          <div className='card-body'>
            <h5 className='card-title'>Dried Fruits</h5>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='card h-100'>
          <img
            src='https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='card-img-top'
            alt='Gemstones'
          />
          <div className='card-body'>
            <h5 className='card-title'>Gemstones</h5>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='card h-100'>
          <img
            src='https://images.pexels.com/photos/191295/pexels-photo-191295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='card-img-top'
            alt='Handicraft'
          />
          <div className='card-body'>
            <h5 className='card-title'>Handicraft</h5>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='card h-100'>
          <img
            src='https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='card-img-top'
            alt='General Category'
          />
          <div className='card-body'>
            <h5 className='card-title'>General Category</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Categories;
