import { useNavigate } from "react-router-dom";
import { post } from "../../service/apiService";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    post("/admin/login", {
      username: e.target[0].value,
      password: e.target[1].value,
    })
      .then(() => {
        localStorage.setItem("isadminloggedin", "true");
        navigate("/admin/products");
      })
      .catch((error: any) => {
        setMessage(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="שם משתמש" required />
      <input placeholder="סיסמה" type="password" required />
      <button type="submit">התחבר</button>
      <br />
      {message}
    </form>
  );
};
export default AdminLogin;
