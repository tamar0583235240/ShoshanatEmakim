import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'admin', element: <AdminPage /> },
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
          },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
