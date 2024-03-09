import React, { useState } from 'react';
import './imageBrowser.css'; // Assuming you'll create this CSS file based on the styles you provided
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons from react-icons

const ImageBrowser = () => {
  // Initialize images array
  const images = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/id/${i + 1}/350/350`,
    thumbnailUrl: `https://picsum.photos/id/${i + 1}/50/50`,
  }));

  // State for selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to change selected image
  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  // Function to show next image
  const nextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  // Function to show previous image
  const prevImage = () => {
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-container">
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt="Thumbnail"
            onClick={() => selectImage(index)}
            className={`thumbnail ${index === selectedImageIndex ? 'selected' : ''}`}
          />
        ))}
      </div>
      <div className="main-image">
        <img src={images[selectedImageIndex].url} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="arrows">
        <button className="prev-button" onClick={prevImage}>
          <FaArrowLeft />
        </button>
        <button className="next-button" onClick={nextImage}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageBrowser;
