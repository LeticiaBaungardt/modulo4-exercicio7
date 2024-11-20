import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { X } from 'lucide-react';


import imagem1 from '../assets/01.jpg';
import imagem2 from '../assets/02.jpg';
import imagem3 from '../assets/03.jpg';
import imagem4 from '../assets/04.jpg';

function ImageGallery() {
  const [images] = useState([
    { id: 1, src: imagem1, alt: 'Imagem 1' },
    { id: 2, src: imagem2, alt: 'Imagem 2' },
    { id: 3, src: imagem3, alt: 'Imagem 3' },
    { id: 4, src: imagem4, alt: 'Imagem 4' },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
  };

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const nextImage = () => {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Galeria de Imagens:</h3>

      <div className='flex flex-nowrap justify-center object-cover max-w-48 cursor-pointer' >
        {images.map((image, index) => (
          <img className='m-4 rounded-xl' key={image.id} src={image.src} alt={image.alt} onClick={() => openModal(index)} />
        ))}
      </div>

      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-xl'>
            <span className='flex justify-end pr-3 mt-3 cursor-pointer' onClick={closeModal}><X size={30} /></span>

            <div className='flex my-6'>
              <button onClick={previousImage}><ChevronLeft size={50} /></button>
              <img className='object-cover max-w-2xl' src={selectedImage.src} alt={selectedImage.alt} />
              <button onClick={nextImage}><ChevronRight size={50} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
