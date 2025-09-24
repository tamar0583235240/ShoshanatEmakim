import { Outlet, useParams } from "react-router-dom";
import type { SubCategoryPageProps } from "../features/products/types/SubCategoryPageProps";
import { get, remove } from "../service/apiService";
import { useEffect, useState } from "react";
import BouquetCard from "../components/BouquetCard";
import "../style/SubCategoryPage.css";
import ProductForm from "./admin/ProductForm";

const SubCategoryPage: React.FC<SubCategoryPageProps> = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [reload, setReload] = useState<number>(0);
  const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProducts = async () => {
    setMessage("");
    const response = await get(subCategory ? `/product/getByCategory/${subCategory}` : `/product/`);
    console.log("response", response);
    if (response.error) {
      setMessage(response.message || "שגיאה לא צפויה");
      setProducts([]);
      return;
    }
    if (response.data && response.data.length > 0) {
      setProducts(response.data);
    } else {
      setProducts([]);
      setMessage(response.message || "לא נמצאו מוצרים");
    }
  };

  const handleDeleteById = async (id: string) => {
    try {
      if (!id) return;
      const response = await remove(`/product/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      if (response.message) setMessage(response.message);
      setReload(reload + 1);
    } catch (error: any) {
      setMessage(error.message || "שגיאה לא צפויה במחיקה");
    }
  };

  useEffect(() => {
    getProducts();
  }, [subCategory, reload]);

  return (
    <div className="subcategory-page">
      <h1 className="subcategory-title">{subCategory}</h1>
      {isAdmin && <button onClick={() => setIsModalOpen(true)}>➕ הוספת מוצר</button>}
      {message && <div className="error-message">{message}</div>}

      <div className="bouquet-grid-container">
        {products.map((item) => (
          <div key={item._id}>
            <BouquetCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.imageURL}
            />
            {isAdmin && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <button>✏️ עדכון</button>
                <button onClick={() => handleDeleteById(item._id)}>🗑 מחיקה</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Outlet />
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <ProductForm setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;
