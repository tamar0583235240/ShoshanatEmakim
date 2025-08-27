import videoHomePage from "../assets/video-homePage.mp4";
import BouquetCard from "../components/BouquetCard";
import "../style/HomePage.css"

const HomePage: React.FC = () => {
    const engagementBouquets = [
    {
      id: 1,
      image: "frontend/src/assets/mok-img.jpg",
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
       <div className="bg-white p-6" dir="rtl">
      <div className="border-t-4 border-blue-500 mb-1"></div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base text-gray-800">זרי אירוסין שעשויים לעניין אותך</h3>
          <button 
            className="text-sm text-gray-700 border border-gray-300 px-4 py-2 bg-white hover:bg-gray-50 transition-colors"
          >
            כל הזרים &lt;&lt;
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {engagementBouquets.slice(0, 3).map((bouquet) => (
            <BouquetCard key={bouquet.id} bouquet={bouquet} />
          ))}
        </div>
      </div>

      {/* Popular Bridal Bouquets Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-600">זרי הכלה הפופולריים שלנו</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base text-gray-800">זרי הכלה הפופולריים שלנו</h3>
          <button 
            className="text-sm text-gray-700 border border-gray-300 px-4 py-2 bg-white hover:bg-gray-50 transition-colors"
          >
            כל הזרים &lt;&lt;
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {bridalBouquets.slice(0, 3).map((bouquet) => (
            <BouquetCard key={bouquet.id} bouquet={bouquet} />
          ))}
        </div>
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