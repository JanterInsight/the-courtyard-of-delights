import './Products.css';
import { products } from '@data/products';
import { Reveal } from '@components/UI';
import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <section id="productos" className="section products" aria-labelledby="products-title">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <h2 id="products-title" className="section-title">Nuestros Productos</h2>
            <p className="section-subtitle">Deliciosas opciones para todos los gustos</p>
          </div>
        </Reveal>

        <div className="products-grid">
          {products.map((product, index) => (
            <Reveal key={product.id} direction="up" delay={index * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
