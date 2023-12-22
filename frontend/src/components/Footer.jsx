import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faInfoCircle, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo-img.svg"
import './Home.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Your logo or icon here */}
            <img src={logo} alt="Logo" className="img-fluid logo-image" />
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li><a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
              <li><a href="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Additional Links</h5>
            <ul className="list-unstyled">
              <li><a href="/signup"><FontAwesomeIcon icon={faUserPlus} /> Signup</a></li>
              <li><a href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</a></li>
            </ul>
          </div>
        
      
          <div className="col-md-3">
            <h5>Our Address</h5>
            <p>
              123 Main Street<br />
              Cityville, State 12345<br />
              Country
            </p>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
