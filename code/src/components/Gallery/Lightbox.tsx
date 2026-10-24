/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useCallback } from 'react';
import type { GalleryImage } from '@data/gallery';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
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
    },
    [isOpen, onClose, onPrev, onNext]
  );

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
  if (!currentImage) return null;

  return (
    <div
      className="lightbox active"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes"
      onClick={onClose}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Cerrar visor de imágenes"
        >
          <span aria-hidden="true">&times;</span>
          <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Cerrar</span>
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>

        <picture>
          <source
            srcSet={`
              ${currentImage.src.replace('/768px/', '/1440px/')} 1440w
            `.trim()}
            sizes="1440px"
            type="image/webp"
          />
          <img
            className="lightbox-image"
            src={encodeURI(currentImage.src.replace('/768px/', '/1440px/'))}
            alt={currentImage.alt}
            decoding="async"
          />
        </picture>

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
