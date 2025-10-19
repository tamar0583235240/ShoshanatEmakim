import React from "react";
import { useNavigate } from "react-router-dom";
import BouquetCard from "./BouquetCard";
import "../style/BouquetSection.css";

type Bouquet = {
  _id: string;
  name: string;
  imageURL: string;
};

type BouquetSectionProps = {
  title: string;
  bouquets: Bouquet[];
  route: string;
};

const BouquetSection: React.FC<BouquetSectionProps> = ({ title, bouquets = [], route }) => {
  const navigate = useNavigate();

  return (
    <div className="bouquet-section">
      <h2 className="bouquet-section-title">{title}</h2>
      <div className="bouquet-grid">
        {bouquets.slice(0, 4).map((b) => (
          <BouquetCard key={b._id} id={b._id} name={b.name} image={b.imageURL} />
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
