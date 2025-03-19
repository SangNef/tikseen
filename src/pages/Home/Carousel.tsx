import React, { useState, useEffect, useRef } from "react";
import banner01 from "~/assets/banners/001.png";
import banner02 from "~/assets/banners/002.png";
import banner03 from "~/assets/banners/003.png";

const images = [banner01, banner02, banner03];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  const handleTransitionEnd = () => {
    if (index === images.length) {
      setIsTransitioning(false); 
      setIndex(0);
      setTimeout(() => setIsTransitioning(true), 50); 
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {duplicatedImages.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 px-[2.56%]">
            <img src={img} alt={`Banner ${i + 1}`} className="w-full h-auto object-cover flex-shrink-0 basis-11/12 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
