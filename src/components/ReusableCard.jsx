import React, { useState } from "react";
import "../styles/ReusableCard.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";

const ReusableCard = ({ image, title, description, cardLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <p className="card-header">{title}</p>
        <img src={image} alt={title} className="card-image" />
      </div>
      <div
        className={`card-details ${
          isExpanded ? "card-expanded" : "card-collapsed"
        }`}
      >
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {isExpanded && (
          <button onClick={toggleExpand} className="card-close-button">
            <CloseIcon />
          </button>
        )}
      </div>
      {cardLink && (
        <a
          href={cardLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`card-link-button ${isExpanded ? "hidden" : ""}`}
        >
          Visit Link
        </a>
      )}
      {!isExpanded && (
        <button onClick={toggleExpand} className="card-show-button">
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default ReusableCard;
