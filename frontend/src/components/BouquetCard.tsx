import React from "react";
import "../style/BouquetCard.css";

type BouquetProps = {
  id: string;
  name: string;
  image: string;
  category?: string;
};

const BouquetCard: React.FC<BouquetProps> = ({ id, name, image, category }) => {
  return (
    <div className="bouquet-card">
      <div className="bouquet-image">
        <img id={id} src={image} alt={name} />
      </div>
      <div className="bouquet-name">{name}</div>
      {category && <div className="bouquet-category">{category}</div>}
    </div>
  );
};

export default BouquetCard;