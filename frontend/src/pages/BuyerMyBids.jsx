import "../styles/buyerMybids.css";

const MyBids = () => {
  return (
    <div className="mybids-container">
      <h2>My Bids</h2>
      <table className="bids-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>My Bid (₹)</th>
            <th>Highest Bid (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="outbid">
            <td>Vintage Watch</td>
            <td>₹2600</td>
            <td>₹2800</td>
            <td className="status">Outbid</td>
          </tr>
          <tr className="winning">
            <td>Antique Painting</td>
            <td>₹12500</td>
            <td>₹12500</td>
            <td className="status">Winning</td>
          </tr>
          <tr className="outbid">
            <td>Sports Car Model</td>
            <td>₹5500</td>
            <td>₹6000</td>
            <td className="status">Outbid</td>
          </tr>
          <tr className="winning">
            <td>Gold Necklace</td>
            <td>₹18500</td>
            <td>₹18500</td>
            <td className="status">Winning</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
