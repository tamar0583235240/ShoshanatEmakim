import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductForm from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ':category',
        children: [
          {
            index: true,
            element: <CategoryPage />,
          },
          {
            path: ':subCategory',
            element: <SubCategoryPage />,
          }
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
