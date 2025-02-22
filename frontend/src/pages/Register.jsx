import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" className="register-input" required />
          <input type="email" placeholder="Email" className="register-input" required />
          <input type="password" placeholder="Password" className="register-input" required />
          <button className="btn btn-primary">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
