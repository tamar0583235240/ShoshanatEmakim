import { Link } from "react-router-dom";
import carIcon from "../assets/icons/lucide_car.svg";
import clockIcon from "../assets/icons/lucide_clock.svg";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>האתר שלנו</h3>
          <ul>
            <li>
              <Link to="/" state={{ scrollTo: "home" }}>דף הבית</Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "about" }}>אודות</Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "contact" }}>צור קשר</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>צור קשר</h3>
          <ul>
            <li>רשב”י 15 מודיעין עילית</li>
            <li>08 - 9744553</li>
            <li>053-319-1206</li>
            <li>9744553@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>קטגוריות</h3>
          <ul>
            <li><Link to="/זרי אירוסין">זרי אירוסין</Link></li>
            <li><Link to="/זרי כלה">זרי כלה</Link></li>
            <li><Link to="/סידורי פרחים">סידורי פרחים</Link></li>
            <li><Link to="/עיצובי מתנות">עיצובי מתנות</Link></li>
            <li><Link to="/מלאכותי">מלאכותי</Link></li>
            <li><Link to="/עציצים">עציצים</Link></li>
            <li><Link to="/חגים">חגים</Link></li>
            <li><Link to="/ארועים">ארועים</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-availability">
          <h3>
            זמינים אליכם בכל עת{" "}
            <img src={clockIcon} alt="Clock" className="footer-icon" />
          </h3>
          <ul>
            <li>בוקר - 10:00-13:30</li>
            <li>ערב - 19:00-22:00</li>
            <li>יום שישי - 10:00-13:00</li>
          </ul>
          <h4>
            שירות משלוחים לכל רחבי הארץ{" "}
            <img src={carIcon} alt="Car" className="footer-icon-large" />
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
