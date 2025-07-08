import type { CategoryPageProps } from "../features/products/types/CategoryPageProps";

const CategoryPage: React.FC<CategoryPageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>תוכן עבור {title}</p>
    </div>
  );
};

export default CategoryPage;