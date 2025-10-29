import React from 'react';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="c1">
      <h3>
        <i className={`fa-solid ${icon}`}></i> {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;