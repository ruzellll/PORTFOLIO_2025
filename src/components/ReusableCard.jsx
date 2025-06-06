import React from "react";
import "../styles/ReusableCard.css";

const ReusableCard = ({ image, title, description, cardLink }) => {
  return (
    <div className="card-container">
      {/* Sticky Image Section */}
      <div className="card-image-section">
        <a href={cardLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="card-image" />
        </a>
      </div>

      {/* Details Section */}
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ReusableCard;
