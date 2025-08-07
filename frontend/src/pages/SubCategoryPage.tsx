import { useParams } from "react-router-dom";
import type { SubCategoryPageProps } from "../features/products/types/SubCategoryPageProps";

const SubCategoryPage: React.FC<SubCategoryPageProps> = () => {

    const { category, subCategory } = useParams<SubCategoryPageProps>();
  return (
    <div>
      <h1>קטגוריה: {category}</h1>
      <h2>תת־קטגוריה: {subCategory}</h2>
    </div>
  );
};

export default SubCategoryPage;