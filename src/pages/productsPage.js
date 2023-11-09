import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// import servicesData from './services'; // Import the services data

const ProductsPage = () => {

  const servicesData = [
    {
      id: 1,
      title: "Data Analytics & Engineering",
      description:
        "Our data analytics and engineering services help you make data-driven decisions and build robust data infrastructure.",
    },
    {
      id: 2,
      title: "AI/ML Solutions",
      description:
        "We offer AI/ML solutions to leverage the power of artificial intelligence and machine learning in your business.",
    },
    {
      id: 3,
      title: "Cloud Services",
      description:
        "Our cloud services enable you to harness the benefits of cloud computing, from data storage to cloud architecture.",
    },
    // Add more services as needed
  ];
  
 
  
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="services-list">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        <Button color="danger"> Buy</Button>

          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default ProductsPage;
