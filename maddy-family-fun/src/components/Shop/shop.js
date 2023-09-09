import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shop.scss';
import CartIcon from '../../assets/icons/Icon-cart.png';
import TrashIcon from '../../assets/icons/Trash-cart.png';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8090/shop')
      .then((response) => {
        setShopItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shop items:', error);
      });
  }, []);

  const addToCart = (item) => {
    const parsedPrice = parseFloat(item.price);
    setCart([...cart, { ...item, price: parsedPrice }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    return total.toFixed(2);
  };


  return (
    <div className='shop'>
      <div className="cart-summary" onClick={() => setShowCart(!showCart)}>
        <img src={CartIcon} alt="Shopping Cart" width="30" />
        <span>{cart.length}</span>
      </div>
      {showCart && (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      </div>
    ))}
    {cart.length === 0 && <p>Your cart is empty.</p>}
    <div className="cart-total">
      <h3>Total:</h3>
      <p>${getTotalPrice()}</p>
    </div>
    <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
      <button className="pay-button">Pay Now</button>
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
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
