import { useState } from "react"
import "../style/NavBar.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { type SubCategory, SUB_CATEGORIES_BY_CATEGORY } from "../features/products/types/Enums"

const NavBar = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories: SubCategory[] = Object.keys(SUB_CATEGORIES_BY_CATEGORY) as SubCategory[];

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
          <Link to={isAdmin ? "/admin" : "/"} className="navbar-link">
            <img className="logo-image" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* כפתור המבורגר במסכים קטנים */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
          {categories.map((categoryName: SubCategory) => (
            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter(categoryName)}
              onMouseLeave={handleMouseLeave}
              key={categoryName}
            >
              <Link to={isAdmin ? `/admin/${categoryName}` : `/${categoryName}`} className="navbar-link">
                {categoryName}
              </Link>

              {activeDropdown === categoryName && (
                <ul className="dropdown-menu">
                  {SUB_CATEGORIES_BY_CATEGORY[categoryName].map((subCategory: any) => (
                    <li key={subCategory}>
                      <Link
                        to={isAdmin ? `/admin/${categoryName}/${subCategory}` : `/${categoryName}/${subCategory}`}
                        className="dropdown-link"
                      >
                        {subCategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

            <div className="navbar-about-contact-container">
              <li className="navbar-item">
                <Link
                  to="/"
                  state={{ scrollTo: "about" }}
                  className="navbar-link"
                >
                  אודות
                </Link>
              </li>

              <li className="navbar-item">
                <Link
                  to="/"
                  state={{ scrollTo: "contact" }}
                  className="navbar-link"
                >
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
