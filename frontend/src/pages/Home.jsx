import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Online Auction</h2>
        <p>Bid on amazing products in real-time and get the best deals!</p>
        <div className="home-buttons">
          <Link to="/register" className="btn btn-primary">Join Now</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
