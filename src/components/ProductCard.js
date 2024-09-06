import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
      <p>Price: {product.price}</p>
    </div>
  );
}
