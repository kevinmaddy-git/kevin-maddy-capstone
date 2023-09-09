import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shop.scss'; // Import the corresponding CSS styles
import CartIcon from '../../assets/icons/Icon-cart.png'; // Import the shopping cart icon
import TrashIcon from '../../assets/icons/Trash-cart.png'; // Import the trash icon

// Define the Shop functional component
const Shop = () => {
  // Initialize state for shop items, cart, and cart visibility using the useState hook
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch shop items from the server when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:8090/shop')
      .then((response) => {
        // Set the shop items retrieved from the server
        setShopItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shop items:', error);
      });
  }, []);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const parsedPrice = parseFloat(item.price);
    setCart([...cart, { ...item, price: parsedPrice }]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <div className='shop'> {/* Create a shop container with a "shop" class */}
      <div className="cart-summary" onClick={() => setShowCart(!showCart)}>
        <img src={CartIcon} alt="Shopping Cart" width="30" /> {/* Display the shopping cart icon */}
        <span>{cart.length}</span> {/* Display the number of items in the cart */}
      </div>
      {showCart && (
        <div className="cart"> {/* Conditionally render the cart summary */}
          <h2>Shopping Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
            </div>
          ))}
          {cart.length === 0 && <p>Your cart is empty.</p>} {/* Display a message if the cart is empty */}
          <div className="cart-total">
            <h3>Total:</h3>
            <p>${getTotalPrice()}</p> {/* Display the total price of items in the cart */}
          </div>
          <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
            <button className="pay-button">Pay Now</button> {/* Button to initiate payment */}
          </a>
          <button onClick={clearCart}>
            <img src={TrashIcon} width={"40"} alt="Clear Cart" />
          </button>
        </div>
      )}
      <div className="shop-items">
        {shopItems.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} width="200" />
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button> {/* Button to add an item to the cart */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop; // Export the Shop component for use in other parts of your application


