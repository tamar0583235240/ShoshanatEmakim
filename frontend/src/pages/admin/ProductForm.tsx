import { useEffect, useRef, useState } from "react";
import "../../style/AddProduct.css";
import { get, post } from "../../service/apiService";
import ImageUploader from "../../components/ImageUploader";

export default function ProductForm({ setIsModalOpen }: any) {
    const [message, setMessage] = useState<string | null>(null);
    const [categories, setCategories] = useState<any[]>();
    const [formData, setFormData] = useState<any>({
        category: "",
        name: "",
        description: "",
        image: null,
    });
    const uploaderRef = useRef<any>(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await get("/categories/");
                if (response.data) {
                    setCategories(response.data);
                }
            } catch (error) {
                setMessage("שגיאה בטעינת קטגוריות");
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (files?.length) {
            const file = files[0];
            setFormData({
                ...formData,
                image: file,
                name: file.name.split(".")[0],
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const croppedFile = await uploaderRef.current.getCroppedImage();

        const data = new FormData();
        data.append("category", formData.category);
        data.append("name", formData.name);
        data.append("description", formData.description);
        if (croppedFile) data.append("image", croppedFile);

        try {
            await post("/product/add", data);
            setIsModalOpen(false);
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
            <h2>הוספת מוצר חדש</h2>

            <label>קטגוריה</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            >
                <option value="">בחרי קטגוריה</option>
                {categories?.map((subCat) => {
                    if (subCat.parent !== null) {
                        return (
                            <option key={subCat._id} value={subCat._id}>
                                {subCat.name}
                            </option>
                        );
                    }
                })}
            </select>

            <label>שם מוצר</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label>תיאור</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            <label>תמונה</label>
            <ImageUploader name="image" onChange={handleChange} ref={uploaderRef} />
            {message && <p className="error-message">{message}</p>}
            <button type="submit">שמירה</button>
        </form>
    );
}
