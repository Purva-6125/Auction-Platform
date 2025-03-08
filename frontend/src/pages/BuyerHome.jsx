import "../styles/buyerHome.css";

import React, { useEffect, useState } from "react";


const BuyerHome = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    // Fetch seller-entered bidding info
    fetch("/api/getAuctions") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .catch((error) => console.error("Error fetching auctions:", error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Available Auctions</h1>
      <div className="auction-list">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <img src={auction.image} alt={auction.name} className="auction-image" />
            <div className="auction-info">
              <h2>{auction.name}</h2>
              <p>Starting Price: ₹{auction.startingPrice}</p>
              <p>Current Bid: ₹{auction.currentBid}</p>
              <p>End Time: {auction.endTime}</p>
              <button className="bid-button">Place Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerHome;

