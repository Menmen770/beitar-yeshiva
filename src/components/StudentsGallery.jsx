// src/components/StudentsGallery.jsx
// גלריית תמונות של בחורים לומדים בישיבה – Masonry בלי קליקים ובלי לייטבוקס

import React from "react";
import Masonry from "./Masonry";
import "./StudentsGallery.css";

const galleryItems = [
  { id: "1", img: "/images/gallery/g1.jpg", alt: "גלריה g1", height: 320 },
  { id: "2", img: "/images/gallery/g2.jpg", alt: "גלריה g2", height: 260 },
  { id: "3", img: "/images/gallery/g3.jpg", alt: "גלריה g3", height: 360 },
  { id: "4", img: "/images/gallery/g4.jpg", alt: "גלריה g4", height: 280 },
  { id: "5", img: "/images/gallery/g5.jpg", alt: "גלריה g5", height: 340 },
  { id: "6", img: "/images/gallery/g6.jpg", alt: "גלריה g6", height: 300 },
  { id: "7", img: "/images/gallery/g7.jpeg", alt: "גלריה g7", height: 360 },
  { id: "8", img: "/images/gallery/g8.jpeg", alt: "גלריה g8", height: 240 },
  { id: "9", img: "/images/gallery/g9.jpg", alt: "גלריה g9", height: 320 },
  { id: "10", img: "/images/gallery/g10.jpg", alt: "גלריה g10", height: 300 },
  { id: "11", img: "/images/gallery/g11.jpg", alt: "גלריה g11", height: 260 },
  { id: "12", img: "/images/gallery/g12.jpg", alt: "גלריה g12", height: 340 },
  { id: "13", img: "/images/gallery/g13.jpg", alt: "גלריה g13", height: 280 },
  { id: "14", img: "/images/gallery/g14.jpg", alt: "גלריה g14", height: 360 },
  { id: "15", img: "/images/gallery/g15.jpg", alt: "גלריה g15", height: 300 },
  { id: "16", img: "/images/gallery/g16.jpg", alt: "גלריה g16", height: 260 },
];

function StudentsGallery() {
  return (
    <section className="students-gallery-section" dir="rtl">
      <div className="gallery-container">
        <header className="gallery-header">
          <h2 className="gallery-title">החיים בישיבה</h2>
          <p className="gallery-subtitle">
            הצצה לחיי היומיום שלנו - לימוד, תפילה, ואחווה
          </p>
        </header>

        <div className="masonry-shell">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.97}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>

      </div>
    </section>
  );
}

export default StudentsGallery;
