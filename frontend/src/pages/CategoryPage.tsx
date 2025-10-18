import { Outlet, useParams } from "react-router-dom";
import type { CategoryPageProps } from "../features/products/types/CategoryPageProps";
import "../style/CategoryPage.css"

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryPageProps>();
  console.log(`Rendering CategoryPage for category: ${category}`);
  return (
    <div className="category-page">
      <div className="breadcrumb">
        עמוד הבית <span>›</span> {category}
      </div>
      <h1 className="category-title">{category}</h1>
      <div className="title-underline"></div>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
