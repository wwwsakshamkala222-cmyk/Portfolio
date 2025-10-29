import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;