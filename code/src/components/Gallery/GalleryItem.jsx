import { useState, useEffect, useRef } from 'react';

export function GalleryItem({ image, index, onClick }) {
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
    <div
      className="gallery-item"
      onClick={() => onClick(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(index);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver imagen ${index + 1} de 12`}
    >
      <div className="skeleton skeleton-image" style={{ display: imageLoaded ? 'none' : 'block' }} />
      <img
        ref={imgRef}
        src={encodeURI(image.src)}
        alt={image.alt}
        loading="lazy"
        width="400"
        height="400"
        onLoad={() => setImageLoaded(true)}
        onError={handleError}
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />
      <div className="gallery-overlay">
        <span className="gallery-overlay-icon" aria-hidden="true">🔍</span>
      </div>
    </div>
  );
}