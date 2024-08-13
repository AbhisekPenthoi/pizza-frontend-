// src/components/DisplayAllItems.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pizza1 from './assests/pizza1.jpg';
import pizza2 from './assests/pizza2.jpg';
import pizza3 from './assests/pizza3.jpg';
import './styles/DisplayAllItems.css';

const DisplayAllItems = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/items')
        .then(response => setItems(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const deleteItem = (id) => {
      axios.delete(`http://localhost:5000/items/${id}`)
        .then(() => {
          // Remove the item from state
          setItems(items.filter(item => item.id !== id));
        })
        .catch(error => console.error('Error deleting item:', error));
    };
  
    const imageMap = {
      'pizza1.jpg': pizza1,
      'pizza2.jpg': pizza2,
      'pizza3.jpg': pizza3
    };
  
    const defaultImage = './assets/default.jpg'; // Default fallback image
  
    const getImage = (imageName) => imageMap[imageName] || defaultImage;
  
    return (
      <div className="container">
        <h1 className="text-center">All Pizza Items</h1>
        <div className="row">
          {items.length === 0 ? (
            <p className="text-center">No items available</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={getImage(item.image)} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default DisplayAllItems;