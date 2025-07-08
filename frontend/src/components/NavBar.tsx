import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">דף הבית</NavLink></li>
        <li><NavLink to="/about">אודות</NavLink></li>
        <li><NavLink to="/contact">צור קשר</NavLink></li>

        <li>
          אירוסין
          <ul>
            <li><NavLink to="/engagement/live">זרים חיים</NavLink></li>
            <li><NavLink to="/engagement/mixed">זרים משולבים</NavLink></li>
          </ul>
        </li>

        <li>
          כלה
          <ul>
            <li><NavLink to="/bride/hand">זרי כלה ליד</NavLink></li>
            <li><NavLink to="/bride/hoop">זרי חישוק</NavLink></li>
            <li><NavLink to="/bride/orchid">זרי סחלב</NavLink></li>
            <li><NavLink to="/bride/jewel">זרי תכשיט</NavLink></li>
          </ul>
        </li>

        <li>
          פרחים
          <ul>
            <li><NavLink to="/flowers/bouquets">זרי פרחים</NavLink></li>
            <li><NavLink to="/flowers/designs">עיצובי פרחים</NavLink></li>
            <li><NavLink to="/flowers/sweets">עיצובים מתוקים</NavLink></li>
            <li><NavLink to="/flowers/pralines">פרלינים</NavLink></li>
          </ul>
        </li>

        <li>
          מתנות
          <ul>
            <li><NavLink to="/gifts/designs">עיצובי מתנות</NavLink></li>
            <li><NavLink to="/gifts/groom">עיצובים לחתן</NavLink></li>
            <li><NavLink to="/gifts/bride">עיצובים לכלה</NavLink></li>
          </ul>
        </li>

        <li>
          מלאכותיים
          <ul>
            <li><NavLink to="/artificial/arrangements">סידורי פרחים מלאכותיים</NavLink></li>
            <li><NavLink to="/artificial/decor">כלי נוי</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/plants">עציצים</NavLink></li>

        <li>
          חגים
          <ul>
            <li><NavLink to="/holidays/rosh-hashana">ראש השנה</NavLink></li>
            <li><NavLink to="/holidays/hanukkah">חנוכה</NavLink></li>
            <li><NavLink to="/holidays/tu-bav">ט"ו באב</NavLink></li>
            <li><NavLink to="/holidays/purim">פורים</NavLink></li>
            <li><NavLink to="/holidays/shavuot">שבועות</NavLink></li>
          </ul>
        </li>

        <li>
          אירועים
          <ul>
            <li><NavLink to="/events/bar-mitzvah">בר מצווה</NavLink></li>
            <li><NavLink to="/events/bars">עיצוב בארים</NavLink></li>
            <li><NavLink to="/events/centerpieces">מרכזי שולחן</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
