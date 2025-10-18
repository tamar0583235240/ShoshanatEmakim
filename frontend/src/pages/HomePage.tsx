import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style/HomePage.css"
import ContactPage from "../components/ContactPage";
import mockImg from "../assets/mok-img.png";
import BouquetSection from "../components/BouquetSection";
import HeroSection from "../components/HeroSection";
import AboutUsHero from "../components/AboutUsHero";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" , block: "center"});
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="home">
      <HeroSection />
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

      <div id="about">
        <AboutUsHero />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;
