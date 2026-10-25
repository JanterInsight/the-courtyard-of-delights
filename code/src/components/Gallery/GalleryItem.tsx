import { useState, useEffect, useRef } from 'react';
import type { GalleryImage } from '@data/gallery';

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
}

export function GalleryItem({ image, index: _index, onClick }: GalleryItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleError = () => {
    // Don't hide the skeleton on error - shows the alt text instead
    // This way users see the image alt text if the image fails to load
  };

  return (
    <div
      className="gallery-item"
      onClick={() => onClick(_index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(_index);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver imagen ${_index + 1} de la galeria`}
    >
      <div className="skeleton skeleton-image" style={{ display: imageLoaded ? 'none' : 'block' }} />
      <picture>
        <source
          srcSet={`
            ${image.src.replace('/768px/', '/400px/')} 400w,
            ${image.src.replace('/768px/', '/576px/')} 576w,
            ${image.src} 768w,
          `.trim()}
          sizes="(max-width: 768px) 400px, 768px"
          type="image/webp"
        />
        <img
          ref={imgRef}
          src={encodeURI(image.src)}
          alt={image.alt}
          width="400"
          height="400"
          onLoad={() => setImageLoaded(true)}
          onError={handleError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          decoding="async"
        />
      </picture>
      <div className="gallery-overlay">
        <span className="gallery-overlay-icon" aria-hidden="true">🔍</span>
      </div>
    </div>
  );
}