import React from "react";
import "../style/AboutUsHero.css";
import AboutImg from "../assets/AboutImg.jpg";

const AboutUsHero: React.FC = () => {
  return (
    <section className="about-hero" dir="rtl" aria-labelledby="about-title">
      <div className="about-hero__container">
        <div className="about-hero__content">
         <h2 id="about-title" className="about-hero__title">
            מי אנחנו?
            <span className="about-hero__icon">
              <img
                src="/images/flower-icon.png" 
                alt="אייקון פרח"
                className="about-hero__icon-img"
              />
            </span>
          </h2>

          <p className="about-hero__subtitle">שושנת העמקים</p>
          <p className="about-hero__lead">
            חנות פרחים במודיעין עלית עם למעלה מעשר שנות ניסיון
            מתמחה בעיצובים ושירות מכל הלב.
          </p>

          <ul className="about-hero__bullets" aria-label="התחייבויות החנות">
            <li>מלווים כל לקוח ברגש ובמקצועיות</li>
            <li>בחברה והקשבה לצרכיו</li>
            <li>תשומת לב לפרטים הקטנים ויחס אישי מכל הלב</li>
          </ul>
        </div>

        <div className="about-hero__image-wrap">
          <img
            src={AboutImg}
            alt="זר פרחים ורוד על רקע רך"
            className="about-hero__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutUsHero;

