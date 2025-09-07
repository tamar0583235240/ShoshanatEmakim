import { Outlet, useParams } from "react-router-dom";
import type { SubCategoryPageProps } from "../features/products/types/SubCategoryPageProps";
import { getData } from "../service/apiService";
import { useEffect, useState } from "react";
import BouquetCard from "../components/BouquetCard";

const SubCategoryPage: React.FC<SubCategoryPageProps> = () => {

  const { subCategory } = useParams<{ subCategory: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const getProducts = async () => {
    console.log("in product page ", subCategory)
    const response = await getData(`/product/getByCategory/${subCategory}`)
    console.log("response: ", response)
    if (response.status === 200)
      setProducts(response.data.data)
    else
      setMessage("שגיאה בטעינת המוצרים, נסו שוב.")
    console.log("products: ", products)
  }
  useEffect(() => {
    getProducts()
  }, [])

  console.log(`Rendering CategoryPage for category: ${subCategory}`);
  return (
<div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>קטגוריה: {subCategory}</h1>
      {message && <div>{message}</div>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyItems: "center",
        }}
      >
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