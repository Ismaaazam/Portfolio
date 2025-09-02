import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-section-wrapper">
     <section id="about" className="about-section animate-on-load">
      <div className="about-liquid-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <h2 className="about-heading">About Me</h2>
      <h3 className="about-subtitle">Hello, I'm Ismaa Azam</h3>

      <div className="about-box-container">
        <div className="about-description">
          <div className="description-box">
            <p>
              I’m a Full Stack Developer with a passion for merging elegant UI
              with robust backend logic. I specialize in the MERN stack and
              bring ideas to life with seamless, scalable, and secure solutions.
              Currently diving deep into cybersecurity and AI integrations, I
              thrive on solving real-world problems through clean code,
              data-driven logic, and creative thinking. With a strong foundation
              in both software engineering and emerging technologies, I aim to
              build impactful digital experiences that are both user-centric and
              future-ready.
            </p>
            <p>
              I believe in continuous learning and am always exploring new
              technologies to enhance my skill set. Whether it's building
              responsive web applications or delving into cybersecurity, I am
              committed to delivering high-quality solutions that meet user
              needs and business goals.
            </p>
          </div>
        </div>

        <div className="about-details">
          <div className="Name">
            <span className="label ">Name:</span> Ismaa Azam
          </div>
          <div className="Email">
            <span className="label ">Email:</span> ismaaazam090@gmail.com
          </div>
          <div className="Location">
            <span className="label ">Location:</span> Karachi, Pakistan
          </div>
          <div className="Education">
            <span className="label ">Education:</span> B.S. Software
            Engineering, Bahria University
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
