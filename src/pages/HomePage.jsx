// src/pages/HomePage.jsx

import React from "react";
import "./HomePage.css";
import ImageSlider from "../components/ImageSlider";
import RoshYeshivaSection from "../components/RoshYeshivaSection";
import RabbisTeam from "../components/RabbisTeam";
import StudentsGallery from "../components/StudentsGallery";

function HomePage() {
  return (
    <div className="home-page-container">
      {/* Image Slider - directly under navbar */}
      <ImageSlider />

      {/* מי אנחנו - ראש הישיבה */}
      <RoshYeshivaSection />

      {/* צוות הרבנים */}
      <RabbisTeam />

      {/* גלריית תמונות בחורים */}
      <StudentsGallery />
    </div>
  );
}

export default HomePage;
