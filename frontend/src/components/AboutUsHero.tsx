import React from "react";
import "../style/AboutUsHero.css";
import AboutImg from "../assets/AboutImg.jpg";
import WhoAreWeIcon from "../assets/icons/WhoAreWe-Icon.svg";

const AboutUsHero: React.FC = () => {
  return (
    <section className="about-hero" dir="rtl" aria-labelledby="about-title">
      <div className="about-hero__container">
        <div className="about-hero__content">
          <h2 id="about-title" className="about-hero__title">
            <span className="about-hero__icon">
              <img
                src={WhoAreWeIcon}
                className="about-hero__icon-img"
              />
            </span>
            מי אנחנו?
          </h2>

          <p className="about-hero__subtitle">שושנת העמקים</p>
          <p className="about-hero__lead">
            חנות פרחים במודיעין עילית עם למעלה מעשר שנות ניסיון<br />
            מתמחה בעיצובים ושזירות מכל הסוגים.
          </p>

          <p className="about-hero__lead">
            אנו שמחים ללוות כל לקוח ברגעיו המרגשים<br />
            במקצועיות, בהבנה ורגישות לצרכיו<br />
            עם שימת לב לפרטים הקטנים ויחס אישי מכל הלב<br />
          </p>
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

