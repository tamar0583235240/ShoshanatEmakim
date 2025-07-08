import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";

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
        path: 'engagement',
        children: [
          { path: 'live', element: <CategoryPage title="זרים חיים" /> },
          { path: 'mixed', element: <CategoryPage title="זרים משולבים" /> },
        ],
      },
      {
        path: 'bride',
        children: [
          { path: 'hand', element: <CategoryPage title="זרי כלה ליד" /> },
          { path: 'hoop', element: <CategoryPage title="זרי חישוק" /> },
          { path: 'orchid', element: <CategoryPage title="זרי סחלב" /> },
          { path: 'jewel', element: <CategoryPage title="זרי תכשיט" /> },
        ],
      },
      {
        path: 'flowers',
        children: [
          { path: 'bouquets', element: <CategoryPage title="זרי פרחים" /> },
          { path: 'designs', element: <CategoryPage title="עיצובי פרחים" /> },
          { path: 'sweets', element: <CategoryPage title="עיצובים מתוקים" /> },
          { path: 'pralines', element: <CategoryPage title="פרלינים" /> },
        ],
      },
      {
        path: 'gifts',
        children: [
          { path: 'designs', element: <CategoryPage title="עיצובי מתנות" /> },
          { path: 'groom', element: <CategoryPage title="עיצובים לחתן" /> },
          { path: 'bride', element: <CategoryPage title="עיצובים לכלה" /> },
        ],
      },
      {
        path: 'artificial',
        children: [
          { path: 'arrangements', element: <CategoryPage title="סידורי פרחים מלאכותיים" /> },
          { path: 'decor', element: <CategoryPage title="כלי נוי" /> },
        ],
      },
      { path: 'plants', element: <CategoryPage title="עציצים" /> },
      {
        path: 'holidays',
        children: [
          { path: 'rosh-hashana', element: <CategoryPage title="ראש השנה" /> },
          { path: 'hanukkah', element: <CategoryPage title="חנוכה" /> },
          { path: 'tu-bav', element: <CategoryPage title='ט"ו באב' /> },
          { path: 'purim', element: <CategoryPage title="פורים" /> },
          { path: 'shavuot', element: <CategoryPage title="שבועות" /> },
        ],
      },
      {
        path: 'events',
        children: [
          { path: 'bar-mitzvah', element: <CategoryPage title="בר מצווה" /> },
          { path: 'bars', element: <CategoryPage title="עיצוב בארים" /> },
          { path: 'centerpieces', element: <CategoryPage title="מרכזי שולחן" /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
