import { Outlet, useParams } from "react-router-dom";
import type { SubCategoryPageProps } from "../features/products/types/SubCategoryPageProps";
import { getData } from "../service/apiService";
import { useEffect, useState } from "react";

const SubCategoryPage: React.FC<SubCategoryPageProps> = () => {

  const { subCategory } = useParams<{ subCategory: string }>();
  const [product, setProduct] = useState<string>("");

  const getProducts = async () => {
    console.log("in product page ", subCategory)
    setProduct(await getData(`/product/getByCategory/${subCategory}`))
    console.log("product: ", product)
  }
  useEffect(() => {
    getProducts()
  }, [])

  console.log(`Rendering CategoryPage for category: ${subCategory}`);
  return (
    <div>
      <h1>קטגוריה: {subCategory}</h1>
      <Outlet />
    </div>
  );
};

export default SubCategoryPage;