// import React from "react";
// import "../style/BouquetCard.css";

// type BouquetProps = {
//   id: string;
//   name: string;
//   image: string;
//   category?: string;
//   description?: string;
//   onClick?: () => void;
//   onDelete?: () => void;
// };

// const BouquetCard: React.FC<BouquetProps> = ({
//   id,
//   name,
//   image,
//   category,
//   description,
//   onClick,
//   onDelete,
// }) => {
//   return (
//     <div className="bouquet-card">
//       <div className="bouquet-image" onClick={onClick}>
//         <img id={id} src={image} alt={name} />
//       </div>
//       <div className="bouquet-footer">
//         <div className="bouquet-name">{name}</div>
//         {onDelete && (
//           <button
//             className="delete-btn-footer"
//             onClick={(e) => {
//               e.stopPropagation();
//               onDelete();
//             }}
//             title="מחיקה"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="trash-icon"
//             >
//               <polyline points="3 6 5 6 21 6" />
//               <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3-3h8a2 2 0 0 1 2 2v1H6V5a2 2 0 0 1 2-2z" />
//             </svg>
//           </button>
//         )}
//       </div>
//       {category && <div className="bouquet-category">{category}</div>}
//     </div>
//   );
// };

// export default BouquetCard;
import React from "react";
import "../style/BouquetCard.css";

type BouquetProps = {
  id: string;
  name: string;
  image: string;
  category?: string;
  onClick?: () => void;
  onDelete?: () => void;
};

const BouquetCard: React.FC<BouquetProps> = ({
  id,
  name,
  image,
  category,
  onClick,
  onDelete,
}) => {
  return (
    <div className="bouquet-card">
      <div className="bouquet-image" onClick={onClick}>
        <img id={id} src={image} alt={name} />
      </div>
      <div className="bouquet-footer">
        <div className="bouquet-name">{name}</div>
        {onDelete && (
          <button
            className="delete-btn-footer"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="מחיקה"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="trash-icon"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3-3h8a2 2 0 0 1 2 2v1H6V5a2 2 0 0 1 2-2z" />
            </svg>
          </button>
        )}
      </div>
      {category && <div className="bouquet-category">{category}</div>}
    </div>
  );
};

export default BouquetCard;
