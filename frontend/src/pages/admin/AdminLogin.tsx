import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // בדיקה מול השרת או סיסמה זמנית...
    login();
    navigate("/admin/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="שם משתמש" required />
      <input placeholder="סיסמה" type="password" required />
      <button type="submit">התחבר</button>
    </form>
  );
};
export default AdminLogin;
