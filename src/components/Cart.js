import React, { useState } from "react";
import "../App.css"; 


const Cart = ({ cartItems, onRemoveFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveClick = (index) => {
    setItemToRemove(index);
    setIsModalOpen(true);
  };

  const handleRemoveItem = () => {
    onRemoveFromCart(itemToRemove);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart">
      <h2>Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
                <button
                  onClick={() => handleRemoveClick(index)}
                  style={{ marginLeft: "20px" }}
                >
                  Remove ❌
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to remove this item?</p>
            <button onClick={handleRemoveItem}>Yes</button>
            <button onClick={handleCloseModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
