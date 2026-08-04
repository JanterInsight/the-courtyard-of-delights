import { useEffect, useCallback } from 'react';

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      default:
        break;
    }
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="lightbox active"
      role="dialog"
      aria-label="Visor de imágenes"
      aria-hidden="false"
      onClick={onClose}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Cerrar visor de imágenes"
        >
          &times;
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>

        <img
          className="lightbox-image"
          src={currentImage.src}
          alt={currentImage.alt}
        />

        <button
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>

        <div className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}