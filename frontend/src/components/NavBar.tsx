import { useState, useEffect } from "react";
import "../style/NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { post } from "../service/apiService";
import { get } from "../service/apiService";

const NavBar = () => {
  const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: any = await get("/categories/");
        if (response.data) {
          setCategories(response.data);
        }
      } catch (error) {
        setCategories([{ name: "שגיאה בטעינת קטגוריות" }]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    };

    handleScroll();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth > 768) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setActiveDropdown(null);
  };

  const toggleDropdown = (categoryName: string) => {
    setActiveDropdown(activeDropdown === categoryName ? null : categoryName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${isVisible ? "show" : "hide"}`} dir="rtl">
      <div className="navbar-container">
        <div className="logo-container">
          <Link
            to={isAdmin ? "/admin" : "/"}
            className="navbar-link"
            onClick={closeMenu}
          >
            <img className="logo-image" src={logo} alt="Logo" />
          </Link>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="תפריט"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            {categories.map((category: any) => (
              category.parent === null && (
              <li
                className={`navbar-item dropdown ${activeDropdown === category.name ? "active" : ""
                  }`}
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
                key={category.name}
              >
                <div className="category-header">
                  <Link
                    to={isAdmin ? `/admin/${category.name}` : `/${category.name}`}
                    className="navbar-link"
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>

                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(category.name)}
                    aria-label={`הצג תת-קטגוריות של ${category.name}`}
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="currentColor"
                      className={
                        activeDropdown === category.name ? "rotated" : ""
                      }
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                {activeDropdown === category.name && (
                  <ul className="dropdown-menu">
                    {categories.filter((cat: any) => cat.parent?._id === category._id).map(
                      (subCategory: any) => (
                        <li key={subCategory._id}>
                          <Link
                            to={
                              isAdmin
                                ? `/admin/products/${category.name}/${subCategory.name}`
                                : `/${category.name}/${subCategory.name}`
                            }
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            {subCategory.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>)
            ))}

            <div className="navbar-about-contact-container">
              {!isAdmin ? (
                <>
                  <li className="navbar-item">
                    <Link
                      to="/"
                      state={{ scrollTo: "about" }}
                      className="navbar-link"
                      onClick={closeMenu}
                    >
                      אודות
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link
                      to="/"
                      state={{ scrollTo: "contact" }}
                      className="navbar-link"
                      onClick={closeMenu}
                    >
                      צור קשר
                    </Link>
                  </li>
                </>
              ) : (
                <li className="navbar-item">
                  <Link
                    to="/"
                    className="navbar-link"
                    onClick={() => {
                      localStorage.removeItem("isadminloggedin");
                      post("/admin/logout");
                      closeMenu();
                    }}
                  >
                    התנתק
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>

        {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default NavBar;
