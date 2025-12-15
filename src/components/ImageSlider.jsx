import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide4.png",
    "/images/slide5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero-slider-section">
      <div className="slider-container">
        {/* כל השקופיות יושבות אחת על השנייה */}
        {slides.map((src, index) => (
          <div
            key={index}
            className={`slider-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
            <div className="slide-overlay"></div>
          </div>
        ))}

        {/* חצים */}
        <button
          className="slider-arrow slider-arrow-prev"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <span></span>
        </button>
        <button
          className="slider-arrow slider-arrow-next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <span></span>
        </button>

        {/* נקודות */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
