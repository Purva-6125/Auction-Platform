import React from "react";
import "../styles/sellerNavbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">Auction Platform</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">My Auctions</a></li>
        <li><a href="/create/auction">Create Auction</a></li>
        {/* <li><a href="#" className="notifications">Notifications 🔔</a></li> */}
        <li className="profile-menu">
          <a href="#" className="profile">Profile </a>
          {/* <ul className="dropdown">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
