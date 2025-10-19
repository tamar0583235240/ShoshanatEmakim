import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SubCategoryPage from "./pages/SubCategoryPage";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products/:category?",
        children: [
          { index: true, element: <SubCategoryPage /> },
          { path: ":subCategory?", element: <SubCategoryPage /> },
        ],
      },
      {
        path: "admin",
        children: [
          { index: true, element: <Navigate to="products" replace /> },
          { path: "login", element: <AdminLogin /> },
          {
            path: "products/:category?/:subCategory?",
            element: (
              <ProtectedRoute>
                <SubCategoryPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;