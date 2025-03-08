import { useNavigate } from "react-router-dom";
import "../styles/Logout.css"; // Ensure CSS is correctly imported

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");

      // Redirect to home page
      navigate("/home");
    }
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
