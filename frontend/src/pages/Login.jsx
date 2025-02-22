import "../styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("buyer");

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form>
          <select 
            className="login-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <input type="email" placeholder="Email" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
          <button className="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
