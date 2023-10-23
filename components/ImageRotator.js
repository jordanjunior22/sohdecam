/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';

const ImageRotator = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are preloaded

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds in milliseconds

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `./${image}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      }));

      setImagesLoaded(true);
    };

    preloadImages();
  }, []); // Run once when the component mounts

  return (
    <div className="image-rotator">
      {imagesLoaded && images.map((image, index) => (
        <img
          key={index}
          src={`./${image}`}
          alt={`Image ${index + 1}`}
          className={`image ${index === currentImageIndex ? "visible" : ""}`}
        />
      ))}
      <style jsx>{`
        .image-rotator {
          width: 100%;
          height: 325px; /* Set your desired height */
          overflow: hidden;
          position: relative;
          margin-top:1rem;
          margin-bottom:1rem;
        }
        .image {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          object-fit: cover;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageRotator;