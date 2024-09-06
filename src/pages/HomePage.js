import React from 'react';
import { products, categories } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection(';
import Header from '../components/header';
import Footer from '../components/footer';    
export default function HomePage() {
  return (
    <div>
        <Header />
      <CategorySection />
      <div className="product-section">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

