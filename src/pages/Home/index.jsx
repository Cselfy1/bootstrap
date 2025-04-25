import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section text-center mb-5">
        <ReactTyped
          strings={["Welcome to TechHub 👋", "Premium PC Parts", "Build Your Dream PC"]}
          typeSpeed={60}
          backSpeed={50}
          loop>
          <span style={{ fontSize: '3rem', display: 'inline-block', minHeight: '1.5em', fontWeight: 'bold' }}></span>
        </ReactTyped>
        
        <p className="mt-4 lead">Your one-stop shop for high-performance PC components</p>
        
        <div className="mt-5">
          <Link to="/products" className="btn btn-primary btn-lg me-3">
            Browse Products
          </Link>
          <Link to="/contacts" className="btn btn-outline-secondary btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="featured-section mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="position-relative">
                <img src="https://placeholder.pics/svg/300x200/DEDEDE/555555/RTX%205080" className="card-img-top" alt="RTX 5080" />
                <span className="position-absolute top-0 end-0 badge bg-danger p-2 m-2">NEW</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">RTX 5080 Ti</h5>
                <p className="card-text">Next-gen graphics with unparalleled performance.</p>
                <h6 className="text-primary">$1,299.99</h6>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://placeholder.pics/svg/300x200/DEDEDE/555555/Core%20i9-14900K" className="card-img-top" alt="Intel Core i9" />
              <div className="card-body">
                <h5 className="card-title">Intel Core i9-14900K</h5>
                <p className="card-text">Extreme processing power for demanding tasks.</p>
                <h6 className="text-primary">$599.99</h6>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://placeholder.pics/svg/300x200/DEDEDE/555555/ROG%20Motherboard" className="card-img-top" alt="ROG Motherboard" />
              <div className="card-body">
                <h5 className="card-title">ROG Maximus Z890</h5>
                <p className="card-text">Premium motherboard with advanced features.</p>
                <h6 className="text-primary">$449.99</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home