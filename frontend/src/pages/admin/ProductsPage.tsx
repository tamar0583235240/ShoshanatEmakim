import { useParams } from "react-router-dom";
import { get, remove } from "../../service/apiService";
import { useEffect, useState } from "react";
import BouquetCard from "../../components/BouquetCard";
import ProductForm from "./ProductForm";
import NavBar from "../../components/NavBar";

const AdminSubCategoryPage: React.FC = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [reload, setReload] = useState<number>(0);
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProducts = async () => {
    try {
      let response;
      if (!subCategory)
        response = await get(`/product/`);
      else
        response = await get(`/product/getByCategory/${subCategory}`);

      setProducts(response.data || []);
      if (response.message) setMessage(response.message);
    } catch (error: any) {
      setMessage(error.message || "שגיאה לא צפויה");
      setProducts([]); 
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
    <div style={{ padding: "20px" }}>
      <header>
        <NavBar />
      </header>
      <h1 style={{ marginBottom: "20px" }}>ניהול קטגוריה: {subCategory}</h1>

      {/* כפתורי שליטה למעלה */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setIsModalOpen(true)}>➕ הוספת מוצר</button>
      </div>

      {message && <div>{message}</div>}

      {/* גריד מוצרים */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              position: "relative",
              width: "100%",
              maxWidth: "300px",
            }}

          >
            <BouquetCard id={item._id} name={item.name} image={item.imageURL} category={item.category} />

            {/* כפתורי פעולה על כל מוצר */}
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
          </div>
        ))}
      </div>

      {/* מודל לטופס */}
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

export default AdminSubCategoryPage;
