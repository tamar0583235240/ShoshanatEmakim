import { Outlet, useParams } from "react-router-dom";
import type { CategoryPageProps } from "../features/products/types/CategoryPageProps";

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryPageProps>();
  console.log(`Rendering CategoryPage for category: ${category}`);
  return (
    <div>
      <h1>קטגוריה: {category}</h1>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
