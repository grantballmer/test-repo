import React from "react";
import "./managementCard.scss";

import { text } from "./managementText";

const ManagementCard = ({ icon, heading }) => {
  return (
    <div className="management-card">
      <div className="management-card__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="management-card__text">
        <h2>{heading}</h2>
        <p>{text[heading].paragraph}</p>
      </div>
    </div>
  );
};

export default ManagementCard;
