import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Organic Bazaar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Login">Login</Link>
            </li>
        
          </ul>

          <div className="d-flex align-items-center">
            <div className="nav-item ms-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="btn btn-outline-light" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>

            <div className="nav-item ms-3">
              <Link className="nav-link text-light" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Link>
            </div>

            <div className="nav-item ms-3">
              <Link className="nav-link text-light" to="/login">
                <FontAwesomeIcon icon={faHeart} /> Favorites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
