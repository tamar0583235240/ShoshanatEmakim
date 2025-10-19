import React from "react";
import videoHomePage from "../assets/video-homePage.mp4";
import "../style/HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={videoHomePage} type="video/mp4" />
          הדפדפן שלך לא תומך בווידאו.
        </video>

        <div>
          <h1 className="overlay-title">שושנת העמקים</h1>
          <h2 className="overlay-subtitle">יודעים לשזור את ההבדל</h2>
          <a href="/products/" className="cta-button">
            &lt;&lt; לכל הזרים שלנו
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
