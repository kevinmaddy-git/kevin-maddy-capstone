import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/shop')
      .then(response => {
        setShopItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching shop items:', error);
      });
  }, []);

  const addToCart = (itemId) => {
  };

  return (
    <div>
      <div className="shop-items">
        {shopItems.map(item => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} width="200" />
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

