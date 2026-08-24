import './Products.css';
import { products } from '@data/products';
import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <section id="productos" className="section products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-header">
          <h2 id="products-title" className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">Deliciosas opciones para todos los gustos</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
