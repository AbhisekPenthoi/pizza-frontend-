// src/components/Home.js

import React from 'react';
import DisplayAllItems from './DisplayAllItems';
import { Link } from 'react-router-dom';
import pizzaImage from './assests/pizza.jpg'; // Correct path to your image
import './styles/HomePage.css'; // Import custom CSS for additional styling


const Home = () => {
    return (
      <div className="home-page">
        <div className="container text-center">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3">Welcome to Pizza Paradise!</h1>
              <p className="lead">Your favorite place for delicious pizzas, fresh ingredients, and a cozy atmosphere.</p>
              <Link to="/items" className="btn btn-primary btn-lg">Explore Our Menu</Link>
            </div>
            <div className="col-lg-6">
              <img src={pizzaImage} alt="Delicious Pizza" className="pizza-image img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;