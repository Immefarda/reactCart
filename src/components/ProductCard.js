// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="150" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
