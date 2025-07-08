import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - הדף לא נמצא</h1>
      <p>אופס! הדף שחיפשת לא קיים.</p>
      <Link to="/">חזור לדף הבית</Link>
    </div>
  );
};

export default NotFound;
