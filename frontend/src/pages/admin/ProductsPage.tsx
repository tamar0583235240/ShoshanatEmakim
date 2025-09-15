import { useParams } from "react-router-dom";
import { getData, deleteData } from "../../service/apiService";
import { useEffect, useState } from "react";
import BouquetCard from "../../components/BouquetCard";
import ProductForm from "./ProductForm"; // שימי לב לייבוא
import NavBar from "../../components/NavBar";

const AdminSubCategoryPage: React.FC = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProducts = async () => {
    let response;
    if(subCategory === undefined)
       response = await getData(`/product/`); 
    else
      response = await getData(`/product/getByCategory/${subCategory}`);
    if (response.status === 200) {
      setProducts(response.data.data);
    } else {
      setMessage("שגיאה בטעינת המוצרים, נסו שוב.");
    }
  };

  const handleDeleteById = async (id: string) => {
    console.log("Deleting product with ID:", id);
    if (!id) return;
    const response = await deleteData({},`/product/${id}`);
    if (response) {
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } else {
      setMessage("מחיקה נכשלה");
    }
  };

  useEffect(() => {
    getProducts();
  }, [subCategory]);

  return (
    <div style={{ padding: "20px" }}>
      <header>
        <NavBar isAdmin={true} />
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
