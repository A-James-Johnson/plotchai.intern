import React from 'react';
import { categories } from '../data/dummyData';

export default function CategorySection() {
  return (
    <div className="category-section">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
