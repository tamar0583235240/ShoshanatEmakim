// import { useState } from "react";
// import "../style/NavBar.css";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// import {
//   type SubCategory,
//   SUB_CATEGORIES_BY_CATEGORY,
// } from "../features/products/types/Enums";
// import { post } from "../service/apiService";

// const NavBar = () => {
//   const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories: SubCategory[] = Object.keys(
//     SUB_CATEGORIES_BY_CATEGORY
//   ) as SubCategory[];

//   const handleMouseEnter = (menu: string) => {
//     setActiveDropdown(menu);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   return (
//     <nav className="navbar" dir="rtl">
//       <div className="navbar-container">
//         <div className="logo-container">
//           <Link to={isAdmin ? "/admin" : "/"} className="navbar-link">
//             <img className="logo-image" src={logo} alt="Logo" />
//           </Link>
//         </div>

//         <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
//           <ul className="navbar-menu">
//             {categories.map((categoryName: SubCategory) => (
//               <li
//                 className="navbar-item dropdown"
//                 onMouseEnter={() => handleMouseEnter(categoryName)}
//                 onMouseLeave={handleMouseLeave}
//                 key={categoryName}
//               >
//                 <Link
//                   to={isAdmin ? `/admin/${categoryName}` : `/${categoryName}`}
//                   className="navbar-link"
//                 >
//                   {categoryName}
//                 </Link>

//                 {activeDropdown === categoryName && (
//                   <ul className="dropdown-menu">
//                     {SUB_CATEGORIES_BY_CATEGORY[categoryName].map(
//                       (subCategory: any) => (
//                         <li key={subCategory}>
//                           <Link
//                             to={
//                               isAdmin
//                                 ? `/admin/products/${categoryName}/${subCategory}`
//                                 : `/${categoryName}/${subCategory}`
//                             }
//                             className="dropdown-link"
//                           >
//                             {subCategory}
//                           </Link>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 )}
//               </li>
//             ))}

//             <div className="navbar-about-contact-container">
//               {!isAdmin ? (
//                 <>
//                   <li className="navbar-item">
//                     <Link
//                       to="/"
//                       state={{ scrollTo: "about" }}
//                       className="navbar-link"
//                     >
//                       אודות
//                     </Link>
//                   </li>
//                   <li className="navbar-item">
//                     <Link
//                       to="/"
//                       state={{ scrollTo: "contact" }}
//                       className="navbar-link"
//                     >
//                       צור קשר
//                     </Link>
//                   </li>
//                 </>
//               ) : (
//                 <li className="navbar-item">
//                   <Link
//                     to="/"
//                     className="navbar-link"
//                     onClick={() => {
//                       localStorage.removeItem("isadminloggedin");
//                       post("/admin/logout");
//                     }}
//                   >
//                     התנתק
//                   </Link>
//                 </li>
//               )}
//             </div>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import { useState, useEffect } from "react";
import "../style/NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  type SubCategory,
  SUB_CATEGORIES_BY_CATEGORY,
} from "../features/products/types/Enums";
import { post } from "../service/apiService";

const NavBar = () => {
  const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories: SubCategory[] = Object.keys(
    SUB_CATEGORIES_BY_CATEGORY
  ) as SubCategory[];

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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth > 768) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (categoryName: string) => {
    if (activeDropdown === categoryName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(categoryName);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar" dir="rtl">
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
            {categories.map((categoryName: SubCategory) => (
              <li
                className={`navbar-item dropdown ${
                  activeDropdown === categoryName ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(categoryName)}
                onMouseLeave={handleMouseLeave}
                key={categoryName}
              >
                <div className="category-header">
                  <Link
                    to={isAdmin ? `/admin/${categoryName}` : `/${categoryName}`}
                    className="navbar-link"
                    onClick={closeMenu}
                  >
                    {categoryName}
                  </Link>
                  
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(categoryName)}
                    aria-label={`הצג תת-קטגוריות של ${categoryName}`}
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="currentColor"
                      className={activeDropdown === categoryName ? "rotated" : ""}
                    >
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                </div>

                {activeDropdown === categoryName && (
                  <ul className="dropdown-menu">
                    {SUB_CATEGORIES_BY_CATEGORY[categoryName].map(
                      (subCategory: any) => (
                        <li key={subCategory}>
                          <Link
                            to={
                              isAdmin
                                ? `/admin/products/${categoryName}/${subCategory}`
                                : `/${categoryName}/${subCategory}`
                            }
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            {subCategory}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
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

        {isMenuOpen && (
          <div className="navbar-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;