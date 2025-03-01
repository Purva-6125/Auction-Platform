import "../styles/buyerProfile.css";
import { useState } from "react";

const BuyerProfile = () => {
  // State to store user details
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
    profilePic: "https://via.placeholder.com/120",
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  // Handle input changes
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Handle form submission (Save changes)
  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />

        {isEditing ? (
          <>
            <input type="text" name="name" value={updatedUser.name} onChange={handleChange} className="edit-input" />
            <input type="email" name="email" value={updatedUser.email} onChange={handleChange} className="edit-input" />
            <input type="text" name="phone" value={updatedUser.phone} onChange={handleChange} className="edit-input" />
            <input type="text" name="address" value={updatedUser.address} onChange={handleChange} className="edit-input" />
            <button className="save-btn" onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p className="email">{user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyerProfile;
