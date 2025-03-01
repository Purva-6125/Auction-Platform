import "../styles/buyerMyWins.css";

const BuyerMyWins = () => {
  return (
    <div className="wins-container">
      <h2>My Wins</h2>
      <table className="wins-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Winning Bid (₹)</th>
            <th>Seller Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vintage Watch</td>
            <td>₹2800</td>
            <td>Rahul Sharma</td>
            <td className="status confirmed">Confirmed</td>
          </tr>
          <tr>
            <td>Antique Painting</td>
            <td>₹12500</td>
            <td>Meera Kapoor</td>
            <td className="status pending">Pending</td>
          </tr>
          <tr>
            <td>Gold Necklace</td>
            <td>₹18500</td>
            <td>Amit Verma</td>
            <td className="status confirmed">Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BuyerMyWins;
