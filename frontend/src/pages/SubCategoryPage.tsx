import { Outlet, useParams } from "react-router-dom";
import type { SubCategoryPageProps } from "../features/products/types/SubCategoryPageProps";
import { get } from "../service/apiService";
import { useEffect, useState } from "react";
import BouquetCard from "../components/BouquetCard";
import "../style/SubCategoryPage.css";

const SubCategoryPage: React.FC<SubCategoryPageProps> = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const getProducts = async () => {
    const response = await get(`/product/getByCategory/${subCategory}`);
    console.log(response);
    setProducts(response.data);
    response.message && setMessage("שגיאה בטעינת המוצרים, נסו שוב.");
  };

  useEffect(() => {
    getProducts();
  }, [subCategory]);

  return (
    <div className="subcategory-page">
      <h1 className="subcategory-title">{subCategory}</h1>
      {message && <div className="error-message">{message}</div>}

      <div className="bouquet-grid-container">
        {products.map((item) => (
          <BouquetCard
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.imageURL}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default SubCategoryPage;
