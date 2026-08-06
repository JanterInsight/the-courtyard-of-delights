import './Gallery.css';
import { useState, useCallback } from 'react';
import { galleryImages } from '../../data/gallery';
import { GalleryItem } from './GalleryItem';
import { Lightbox } from './Lightbox';

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const showMore = () => {
    setVisibleCount(galleryImages.length);
  };

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  return (
    <section id="galeria" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-header">
          <h2 id="gallery-title" className="section-title">Galería</h2>
          <p className="section-subtitle">Momentos dulces en El Patio de las Delicias</p>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>

        {hasMore && (
          <div className="gallery-show-more">
            <button className="btn btn-secondary" onClick={showMore}>
              Ver más ({galleryImages.length - visibleCount} fotos restantes)
            </button>
          </div>
        )}
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
