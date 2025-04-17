// src/components/ProductList.js
import React from "react";
import products from "../data/Products";
import ProductCard from "./ProductCard";

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
