import "../styles/register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("buyer");

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" className="register-input" required />
          <input type="email" placeholder="Email" className="register-input" required />
          <input type="password" placeholder="Password" className="register-input" required />
          <select 
            className="register-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button className="btn btn-primary">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
