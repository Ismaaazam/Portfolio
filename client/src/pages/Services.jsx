import React from "react";
import "../Styles/Services.css";
import { FaCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Building responsive, dynamic, and secure websites with modern technologies.",
    points: [
      "Full-stack development with MERN",
      "REST API integration",
      "E-commerce solutions",
      "Performance optimization",
      "CMS customization"
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Developing sleek, high-performance cross-platform apps for Android and iOS.",
    points: [
      "React Native development",
      "API integration & authentication",
      "App store deployment",
      "Progressive Web Apps (PWA)",
      "Mobile UI/UX design"
    ]
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description:
      "Creating visually appealing, intuitive, and user-friendly interfaces.",
    points: [
      "Responsive web and app design",
      "Wireframing & prototyping",
      "User experience research",
      "Modern design systems",
      "Interactive animations"
    ]
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">My Services</h2>
      <p className="services-subtitle">
        I craft impactful digital experiences with a focus on functionality, design, and performance.
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-container">
              <div className="service-icon-circle">
                {service.icon}
              </div>
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul>
              {service.points.map((point, idx) => (
                <li key={idx}>✔ {point}</li>
              ))}
            </ul>
            <div className="hover-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;