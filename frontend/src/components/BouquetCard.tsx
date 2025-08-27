import React from "react";
import "../style/BouquetCard.css";

type BouquetProps = {
  id: string;
  name: string;
  image: string;
};

const BouquetCard: React.FC<BouquetProps> = ({ id, name, image }) => {
  return (
    <div className="bouquet-card">
      <div className="bouquet-image">
        <img src={image} alt={name} />
      </div>
      <div className="bouquet-name">{name}</div>
    </div>
  );
};

export default BouquetCard;
