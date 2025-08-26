import { useEffect } from "react";
import videoHomePage from "../assets/video-homePage.mp4";
import "../style/HomePage.css"
import { useLocation } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "../Components/ContactPage";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <div className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src={videoHomePage} type="video/mp4" />
              הדפדפן שלך לא תומך בווידאו.
          </video>

          {/* <div className="overlay">
            <h1 className="overlay-title">שושנת העמקים</h1>
            <h2 className="overlay-subtitle">יודעים לשזור את ההבדל</h2>
            <a href="#flowers" className="cta-button">לכל הזרים שלנו</a>
          </div> */}
        </div>
      </div>
      <div id="about">
      <AboutPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;