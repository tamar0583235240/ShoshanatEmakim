import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, remove } from "../service/apiService";
import BouquetCard from "../components/BouquetCard";
import ProductForm from "./admin/ProductForm";
import "../style/SubCategoryPage.css";

const SubCategoryPage = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [reload, setReload] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;

  const getProducts = async () => {
    setMessage("");
    const response = await get(
      subCategory ? `/product/getByCategory/${subCategory}` : `/product/`
    );
    if (response.error) {
      setMessage(response.message || "שגיאה לא צפויה");
      setProducts([]);
    } else if (response.data?.length > 0) {
      setProducts(response.data);
    } else {
      setMessage("לא נמצאו מוצרים");
      setProducts([]);
    }
  };

  const handleDeleteById = async (id: string) => {
    try {
      if (!id) return;
      await remove(`/product/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setReload(reload + 1);
    } catch {
      setMessage("שגיאה במחיקה");
    }
  };

  useEffect(() => {
    getProducts();
  }, [subCategory, reload]);

  return (
    <div className="subcategory-page">
      <div className="breadcrumb">
        {/* עמוד הבית <span>›</span> {Category} <span>›</span> {subCategory} */}
        עמוד הבית <span>›</span> קטגוריה <span>›</span> {subCategory}
      </div>

      <h1 className="subcategory-title">{subCategory}</h1>
      <div className="title-underline"></div>

      {isAdmin && (
        <button
          className="add-product-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + הוספת מוצר
        </button>
      )}

      {message && <div className="error-message">{message}</div>}

      <div className="bouquet-grid-container">
        {products.map((item) => (
          <div key={item._id} className="bouquet-wrapper">
            <BouquetCard
              id={item._id}
              name={item.name}
              image={item.imageURL}
              onClick={() => setSelectedProduct(item)}
            />
            {isAdmin && (
              <div className="admin-actions">
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteById(item._id)}
                >
                  מחיקה
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <img src={selectedProduct.imageURL} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            {selectedProduct.description && (
              <p className="popup-description">{selectedProduct.description}</p>
            )}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <ProductForm setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default SubCategoryPage;
