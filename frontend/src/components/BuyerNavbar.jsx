import { Link } from "react-router-dom";
import "../styles/buyerNavbar.css";

const BuyerNavbar = () => {
  return (
    <nav className="buyer-navbar">
      <div className="logo">Auction Platform</div>
      <ul className="nav-links">
        <li><Link to="/buyer/home">Home</Link></li>
        <li><Link to="/buyer/my-bids">My Bids</Link></li>
        <li><Link to="/buyer/my-wins">My Wins</Link></li>
        <li><Link to="/buyer/profile">Profile</Link></li>
        {/* <li><Link to="/logout">Logout</Link></li> */}
      </ul>
    </nav>
  );
};

export default BuyerNavbar;
