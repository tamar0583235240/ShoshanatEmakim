
import { useState } from "react"
import "../style/NavBar.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="navbar" dir="rtl">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="navbar-link">
            <img className="logo-image" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("engagement")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/engagement" className="navbar-link">
                זרי אירוסין
              </Link>
              {activeDropdown === "engagement" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/engagement/live" className="dropdown-link">
                      זרים חיים
                    </Link>
                  </li>
                  <li>
                    <Link to="/engagement/mixed" className="dropdown-link">
                      זרים משולבים
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("bride")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/bride" className="navbar-link">
                זרי כלה
              </Link>
              {activeDropdown === "bride" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bride/hand" className="dropdown-link">
                      זרי כלה ליד
                    </Link>
                  </li>
                  <li>
                    <Link to="/bride/hoop" className="dropdown-link">
                      זרי חישוק
                    </Link>
                  </li>
                  <li>
                    <Link to="/bride/orchid" className="dropdown-link">
                      זרי סחלב
                    </Link>
                  </li>
                  <li>
                    <Link to="/bride/jewel" className="dropdown-link">
                      זרי תכשיט
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("flowers")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/flowers" className="navbar-link">
                סידורי פרחים
              </Link>
              {activeDropdown === "flowers" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/flowers/bouquets" className="dropdown-link">
                      זרי פרחים
                    </Link>
                  </li>
                  <li>
                    <Link to="/flowers/designs" className="dropdown-link">
                      עיצובי פרחים
                    </Link>
                  </li>
                  <li>
                    <Link to="/flowers/sweets" className="dropdown-link">
                      עיצובים מתוקים
                    </Link>
                  </li>
                  <li>
                    <Link to="/flowers/pralines" className="dropdown-link">
                      פרלינים
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("gifts")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/gifts" className="navbar-link">
                עיצובי מתנות
              </Link>
              {activeDropdown === "gifts" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/gifts/designs" className="dropdown-link">
                      עיצובי מתנות
                    </Link>
                  </li>
                  <li>
                    <Link to="/gifts/groom" className="dropdown-link">
                      עיצובים לחתן
                    </Link>
                  </li>
                  <li>
                    <Link to="/gifts/bride" className="dropdown-link">
                      עיצובים לכלה
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("holidays")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/holidays" className="navbar-link">
                חגים
              </Link>
              {activeDropdown === "holidays" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/holidays/rosh-hashana" className="dropdown-link">
                      ראש השנה
                    </Link>
                  </li>
                  <li>
                    <Link to="/holidays/hanukkah" className="dropdown-link">
                      חנוכה
                    </Link>
                  </li>
                  <li>
                    <Link to="/holidays/tu-bav" className="dropdown-link">
                      ט"ו באב
                    </Link>
                  </li>
                  <li>
                    <Link to="/holidays/purim" className="dropdown-link">
                      פורים
                    </Link>
                  </li>
                  <li>
                    <Link to="/holidays/shavuot" className="dropdown-link">
                      שבועות
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter("events")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/events" className="navbar-link">
                אירועים
              </Link>
              {activeDropdown === "events" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/events/bar-mitzvah" className="dropdown-link">
                      בר מצווה
                    </Link>
                  </li>
                  <li>
                    <Link to="/events/bars" className="dropdown-link">
                      עיצוב בארים
                    </Link>
                  </li>
                  <li>
                    <Link to="/events/centerpieces" className="dropdown-link">
                      מרכזי שולחן
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <div className="navbar-about-contact-container">
              <li className="navbar-item">
                <Link to="/about" className="navbar-link">
                  אודות
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/contact" className="navbar-link">
                  צור קשר
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar

