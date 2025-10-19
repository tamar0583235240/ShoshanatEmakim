import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/HomePage.css"
import ContactPage from "../components/ContactPage";
import BouquetSection from "../components/BouquetSection";
import HeroSection from "../components/HeroSection";
import AboutUsHero from "../components/AboutUsHero";
import { get } from "../service/apiService";

const HomePage: React.FC = () => {
  const location = useLocation();
  const [section1Product, setSection1Product] = useState<any[]>([]);
  const [section2Product, setSection2Product] = useState<any[]>([]);

  const getProducts = async () => {
    const response = await get(
      `/product/getByCategory/זרי אירוסין`
    );
    if (response.error) {
      setSection1Product([]);
    } else if (response.data?.length > 0) {
      setSection1Product(response.data);
    } else {
      setSection1Product([]);
    }
    const response2 = await get(
      `/product/getByCategory/זרי כלה`
    );
    if (response2.error) {
      setSection2Product([]);
    } else if (response2.data?.length > 0) {
      setSection2Product(response2.data);
      setSection2Product(response.data);
    } else {
      setSection2Product([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
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
        bouquets={section1Product}
        route="/זרי כלה"
      />

      <BouquetSection
        title="זרי אירוסין שאולי תאהבו"
        bouquets={section2Product}
        route="/זרי אירוסין"
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
