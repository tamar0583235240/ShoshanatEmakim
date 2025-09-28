import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
