import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import profilePic from "../assets/pfp-no bg.png";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

// SVG Icons for StatsSection
const ProjectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-svg-icon"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ExperienceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-svg-icon"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const CoffeeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-svg-icon"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

// AnimatedCounter Component
const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const numericEndValue = parseInt(endValue.replace("+", ""), 10);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEndValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(numericEndValue);
      }
    };

    requestAnimationFrame(step);
  }, [numericEndValue, duration]);

  return (
    <p className="animated-count">
      {count}
      {endValue.includes("+") ? "+" : ""}
    </p>
  );
};

// StatsSection Component
const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <ProjectIcon />,
      value: "5",
      label: "Projects Completed",
    },
    {
      id: 2,
      icon: <ExperienceIcon />,
      value: "6",
      label: "Semester wrapped!",
    },
    {
      id: 3,
      icon: <CoffeeIcon />,
      value: "100+",
      label: "Cups of Chai",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <AnimatedCounter endValue={stat.value} />
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate");
      }, index * 200);
    });
  }, []);

  return (
    <div className="home-container">
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>
      <div className="bg-blur-circle-3"></div>

     

      <div className="home-content" id="home">
        <div className="home-text animate-on-load">
          <h1 className="hello-heading glowy-text">Hello World!</h1>
          <p className="subtitle">I’m Ismaa Azam — a Software Engineer</p>
          <p className="passion-line">
            Full-Stack Developer (MERN) | Cybersecurity Enthusiast
          </p>
          <p className="tagline">
            I build exceptional digital experiences by blending elegant design
            with robust functionality. Specializing in MERN stack development
            and data-driven solutions to tackle real-world challenges.
          </p>
          <div className="button-group">
            <a href="#contact" className="btn connect">
              <span className="btn-text">Let's Connect</span>
            </a>
            <a href="/resume.pdf" target="_blank" className="btn resume">
              <span className="btn-text">Download Resume</span>
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:ismaaazam090@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ismaaazam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          {/* Stats Section below social icons */}
          <StatsSection />
        </div>
        <div className="home-image">
          <div className="shape-background"></div>
          <div className="profile-image-wrapper">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
