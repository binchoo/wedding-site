import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="section gallery fade-in" id="gallery">
      <h2>우리의 순간들</h2>
      <div className="divider"></div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <div 
              className="gallery-image" 
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className={`gallery-modal ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img 
            src={images[currentImage]} 
            alt={`갤러리 이미지 ${currentImage + 1}`} 
            className="modal-image" 
          />
          <button className="modal-close" onClick={closeModal}>×</button>
          <div className="modal-nav">
            <button onClick={prevImage}>❮</button>
            <button onClick={nextImage}>❯</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;