import React from "react";
import { useNavigate } from "react-router-dom";
import BouquetCard from "./BouquetCard";
import "../style/BouquetSection.css";

type Bouquet = {
  id: string;
  name: string;
  image: string;
};

type BouquetSectionProps = {
  title: string;
  bouquets: Bouquet[];
  route: string;
};

const BouquetSection: React.FC<BouquetSectionProps> = ({ title, bouquets, route }) => {
  const navigate = useNavigate();

  return (
    <div className="bouquet-section">
      <h2 className="bouquet-section-title">{title}</h2>
      <div className="bouquet-grid">
        {bouquets.slice(0, 3).map((b) => (
          <BouquetCard key={b.id} id={b.id} name={b.name} image={b.image} />
        ))}
      </div>
      <div className="bouquet-button-wrapper">
        <button className="bouquet-button" onClick={() => navigate(route)}>
          לכל הזרים &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default BouquetSection;
