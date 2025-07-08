import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "1rem", textAlign: "center" }}>
        <p>© כל הזכויות שמורות - חנות פרחים</p>
      </footer>
    </div>
  );
};

export default AppLayout;
