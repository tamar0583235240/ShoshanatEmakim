import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, remove } from "../service/apiService";
import BouquetCard from "../components/BouquetCard";
import ProductForm from "./admin/ProductForm";
import "../style/SubCategoryPage.css";

const SubCategoryPage = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const { category } = useParams<{ category: string }>();
  const [reload, setReload] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const isAdmin = localStorage.getItem("isadminloggedin") === "true" || false;

  const isHebrew = (str = "") => /^[\u0590-\u05FF\s"'\-]+$/.test(str);

  const getProducts = async () => {
    setMessage("");
    const response = await get(
      subCategory ? `/product/getByCategory/${subCategory}` : category ? `/product/getByCategory/${category}` : `/product/`
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
      setSelectedProduct(null);
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
        <Link to="/">עמוד הבית</Link>

        {isHebrew(category) && category && (
          <>
            <span>›</span>
            <Link to={`/${category}`}>{category}</Link>
          </>
        )}

        {isHebrew(subCategory) && subCategory && (
          <>
            <span>›</span>
            <Link to={`/${category}/${subCategory}`}>{subCategory}</Link>
          </>
        )}
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
          <BouquetCard
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.imageURL}
            description={item.description}
            onClick={() => setSelectedProduct(item)}
            onDelete={isAdmin ? () => handleDeleteById(item._id) : undefined}
          />
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

            <div className="popup-footer">
              <h2 className="popup-name">{selectedProduct.name}</h2>
              {isAdmin && (
                <button
                  className="delete-btn-popup-footer"
                  onClick={() => handleDeleteById(selectedProduct._id)}
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
