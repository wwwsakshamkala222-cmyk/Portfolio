import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <p>SERVICES</p>
      <h1>Our Features & Services</h1>
      <hr />
      <div className="services-container">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;