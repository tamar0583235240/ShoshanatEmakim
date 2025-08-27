import { useEffect } from "react";
import videoHomePage from "../assets/video-homePage.mp4";
import BouquetCard from "../components/BouquetCard";
import "../style/HomePage.css"
import { useLocation } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "../components/ContactPage";
import mockImg from "../assets/mok-img.jpg"
import BouquetSection from "../components/BouquetSection";

const HomePage: React.FC = () => {

  const engagementBouquets = [
    {
      id: 1,
      image: mockImg,
      title: "זר שושנים לבנות, לילות סגולות"
    },
    {
      id: 2,
      image: "frontend/src/assets/mok-img.jpg",
      title: "זר שושנים צבעוני, לילות סגולות"
    },
    {
      id: 3,
      image: "frontend/src/assets/mok-img.jpg",
      title: "זר שושנים לבנות, לילות סגולות"
    }
  ];

  const bridalBouquets = [
    {
      id: 4,
      image: "frontend/src/assets/mok-img.jpg",
      title: "זר שושנים לבנות, לילות סגולות"
    },
    {
      id: 5,
      image: "frontend/src/assets/mok-img.jpg",
      title: "זר שושנים צבעוני, לילות סגולות"
    },
    {
      id: 6,
      image: "frontend/src/assets/mok-img.jpg",
      title: "זר שושנים לבנות, לילות סגולות"
    }
  ];
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
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src={videoHomePage} type="video/mp4" />
            הדפדפן שלך לא תומך בווידאו.
          </video>

          <div>
            <h1 className="overlay-title">שושנת העמקים</h1>
            <h2 className="overlay-subtitle">יודעים לשזור את ההבדל</h2>
            <a href="#flowers" className="cta-button">&lt;&lt;  לכל הזרים שלנו </a>
          </div>
        </div>
      </section>
      <BouquetSection
        title="זרי הכלה הפופולריים שלנו"
        bouquets={[
          { id: "1", name: "זר שושנים לבנות, ליליות סגולות", image: mockImg },
          { id: "2", name: "זר צבעוני חגיגי", image: mockImg },
          { id: "3", name: "זר ורדים אדומים", image: mockImg },
          { id: "4", name: "זר אביבי רומנטי", image: mockImg },
        ]}
        route="/all-bouquets"
      />
      <BouquetSection
        title="זרי אירוסין שאולי תאהבו"
        bouquets={[
          { id: "1", name: "זר שושנים לבנות, ליליות סגולות", image: mockImg },
          { id: "2", name: "זר צבעוני חגיגי", image: mockImg },
          { id: "3", name: "זר ורדים אדומים", image: mockImg },
          { id: "4", name: "זר אביבי רומנטי", image: mockImg },
        ]}
        route="/all-bouquets"
      />

      <div className="main-content">
        <div id="about">
          <AboutPage />
        </div>
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;