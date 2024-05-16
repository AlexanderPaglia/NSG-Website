// ServicesPage.jsx

import React from 'react';
import '../styles/ServicesPage.css';
import careerCoaching from '../Images/careerCoaching.jpg';
import talentManagement from '../Images/talentManagement.jpg';
import pivotProgram from '../Images/pivotProgram.jpg';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service">
        <img src= {talentManagement} alt="Talent Management" />
        <h2>Talent management</h2>
        <p>We offer the full suite of services talent agents have to offer! We can help you polish your brand, scale up your career, and get you to the deals you need to accelerate your growth. Our main introductory service will be getting to know you, familiarizing ourselves with your brand and setting out a plan to fulfill your career’s needs. From content creators that are just starting out or veterans of the industry, we will find a way to bring you to the next step!</p>
      </div>
      <div className="service">
        <img src= {careerCoaching} alt="Career Coaching" />
        <h2>Career Coaching</h2>
        <p>If you do not need the full buy-in to NSG’s talent management services we offer a lite version! If all you need is some career coaching or consulting we are more than happy to help with any concerns you may have on next steps to your gaming career</p>
      </div>
      <div className="service">
        <img src= {pivotProgram} alt="Pivot Program" />
        <h2>Pivot Progam</h2>
        <p>What is probably the most unique service we offer against any other talent agency is our Pivot Program. While we hope to grow every single gaming professional to the highest of highs they can reach, some individuals eventually feel they want to explore new possibilities outside of gaming. While we want to explore every single opportunity to maintain their success, some people simply want a break or step away for a while to revisit their goals. NSG has deep experience in career pivoting and are able to provide the unique program of helping people lateral themselves into their new passions outside of gaming. </p>
      </div>
    </div>
  );
};

export default ServicesPage;
