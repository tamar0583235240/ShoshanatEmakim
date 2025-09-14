import { Link } from "react-router-dom";
import carIcon from "../assets/icons/lucide_car.svg";
import clockIcon from "../assets/icons/lucide_clock.svg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#BC6C62",
        padding: "40px 60px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          color: "black",
          textAlign: "right",
        }}
      >
        <div style={{ minWidth: "150px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            האתר שלנו
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.8",
            }}
          >
            <li>
              <Link to="/" state={{ scrollTo: "home" }}>
                דף הבית
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "about" }}>
                אודות
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "contact" }}>
                צור קשר
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ minWidth: "150px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>צור קשר</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.8",
            }}
          >
            <li>רשב”י 15 מודיעין עילית</li>
            <li>08 - 9744553</li>
            <li>053-319-1206</li>
            <li>9744553@gmail.com</li>
          </ul>
        </div>

        <div style={{ minWidth: "150px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>קטגוריות</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.8",
            }}
          >
            <li>
              <Link to="/זרי אירוסין">זרי אירוסין</Link>
            </li>
            <li>
              <Link to="/זרי כלה">זרי כלה</Link>
            </li>
            <li>
              <Link to="/סידורי פרחים">סידורי פרחים</Link>
            </li>
            <li>
              <Link to="/עיצובי מתנות">עיצובי מתנות</Link>
            </li>
            <li>
              <Link to="/מלאכותי">מלאכותי</Link>
            </li>
            <li>
              <Link to="/עציצים">עציצים</Link>
            </li>
            <li>
              <Link to="/חגים">חגים</Link>
            </li>
            <li>
              <Link to="/ארועים">ארועים</Link>
            </li>
          </ul>
        </div>
        {/* זמינים אליכם בכל עת - בקצה */}
        <div style={{ minWidth: "200px", marginLeft: "30vw" }}>
          {" "}
          {/* רווח גדול מצד ימין */}
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            זמינים אליכם בכל עת{" "}
            <img
              src={clockIcon}
              alt="Clock"
              style={{
                width: "18px",
                display: "inline",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.8",
            }}
          >
            <li>בוקר - 10:00-13:30</li>
            <li>ערב - 19:00-22:00</li>
            <li>יום שישי - 10:00-13:00</li>
          </ul>
          <h4 style={{ marginTop: "20px", fontWeight: "bold" }}>
            שירות משלוחים לכל רחבי הארץ{" "}
            <img
              src={carIcon}
              alt="Car"
              style={{
                width: "22px",
                display: "inline",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />
          </h4>
        </div>
      </div>

      <style>
        {`
          footer a {
            color: black;
            text-decoration: none;
          }
          footer a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
