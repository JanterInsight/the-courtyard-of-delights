import { useState, useEffect, useRef } from 'react';
import type { Product } from '@data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleError = () => {
    setImageLoaded(true);
  };

  return (
    <article className="product-card">
      <div className="skeleton skeleton-image" style={{ display: imageLoaded ? 'none' : 'block' }} />
      <picture>
        <source
          srcSet={product.srcSet}
          sizes={product.sizes}
          type="image/webp"
        />
        <img
          ref={imgRef}
          src={encodeURI(product.image)}
          alt={product.alt}
          className="product-image"
          loading="eager"
          fetchPriority="high"
          width="400"
          height="250"
          onLoad={() => setImageLoaded(true)}
          onError={handleError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          decoding="async"
        />
      </picture>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
}
