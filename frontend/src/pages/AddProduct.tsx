import { useRef, useState } from "react";
import "../style/AddProduct.css";
import {ENUM_SUB_CATEGORIES} from "../types/Enums"
import { postData } from "../service/apiService";
import ImageUploader from "../components/ImageUploader";

export default function ProductForm() {
    const [formData, setFormData] = useState<any>({
        category: "",
        name: "",
        description: "",
        image: null,
    });

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await uploaderRef.current.getCroppedImage();

        const data = new FormData();
        data.append("category", formData.category);
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("image", formData.image);

        try {
            const res = await postData(data,"/product/add");
            const result = await res.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const uploaderRef = useRef<any>(null);

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>הוספת מוצר חדש</h2>

            <label>קטגוריה</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            >
                <option value="">בחרי קטגוריה</option>
                {ENUM_SUB_CATEGORIES.map((subCat) => (<option value={subCat}>{subCat}</option>))}
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

            <button type="submit">שמירה</button>
        </form>
    );
}
