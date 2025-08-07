import videoHomePage from "../assets/video-homePage.mp4";
import "../style/HomePage.css"

const HomePage: React.FC = () => {
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
      <div className="main-content">
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default HomePage;