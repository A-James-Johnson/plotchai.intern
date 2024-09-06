import { useParams } from 'react-router-dom';
import { products } from '../data/dummyData';
import Header from '../components/header';
import Footer from '../components/footer';
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <Header />
      <div className="product-details">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
      </div>
      <Footer/>
    </div>
  );
}
