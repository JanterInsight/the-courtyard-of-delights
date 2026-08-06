import { useState, useEffect, useRef } from 'react';

export function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

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
      />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
}
