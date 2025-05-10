import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data - replace with your actual state management
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', price: 50, quantity: 2, image: './Images/burger.jpg' },
    { id: 2, name: 'Pizza', price: 120, quantity: 1, image: './Images/pizza.jpg' },
  ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="card card-side bg-base-100 shadow-sm">
                <figure className="w-24">
                  <img src={item.image} alt={item.name} className="h-full object-cover" />
                </figure>
                <div className="card-body p-4 flex-row justify-between items-center">
                  <div>
                    <h2 className="card-title text-lg">{item.name}</h2>
                    <p className="text-primary font-semibold">₹{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-lg"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="btn btn-ghost btn-sm text-error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-base-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Total</h3>
              <p className="text-xl font-bold">₹{totalPrice}</p>
            </div>
            <div className="flex justify-end space-x-3">
              <Link to="/" className="btn btn-ghost">
                Continue Shopping
              </Link>
              <button className="btn btn-primary"onClick={()=>console.log(cartItems)}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;