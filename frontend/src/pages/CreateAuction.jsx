import React, { useState } from "react";
import "../styles/createAuction.css";

const CreateAuction = () => {
  const [auction, setAuction] = useState({
    title: "",
    description: "",
    startingPrice: "",
    duration: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuction({ ...auction, [name]: value });
  };

  const handleImageChange = (e) => {
    setAuction({ ...auction, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Auction Created Successfully!");
    console.log("Auction Details:", auction);
  };

  return (
    <div className="create-auction-container">
      <h2>Create New Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>Auction Title:</label>
        <input
          type="text"
          name="title"
          value={auction.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={auction.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Starting Price:</label>
        <input
          type="number"
          name="startingPrice"
          value={auction.startingPrice}
          onChange={handleChange}
          required
        />

        <label>Duration (in hours):</label>
        <input
          type="number"
          name="duration"
          value={auction.duration}
          onChange={handleChange}
          required
        />

        <label>Upload Image:</label>
        <input type="file" onChange={handleImageChange} />

        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
