import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductForm from "./pages/admin/ProductForm";
import ProductsPage from "./pages/admin/ProductsPage";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

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
  {
    path: "/admin",
    children: [
      { path: "login", element: <AdminLogin /> },
      {
        path: ":category/:subCategory",
        element: (
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        ),
        children: [
          { path: "products", element: <ProductsPage /> },
          { path: "add", element: <ProductForm /> },
          { path: "edit/:id", element: <ProductForm /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
