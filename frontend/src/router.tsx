import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
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
      { index: true, element: <Navigate to="products" replace /> },
      { path: "login", element: <AdminLogin /> },
      {
        path: "products/:category?/:subCategory?", element: (
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        )
      },
    ]
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
