import React, { useState } from "react";
import "../Styles/SkillsandTools.css";

const skillsData = {
 Frontend: [
  { name: "React", icon: "⚛️", level: 90 },
   { name: "Material-UI (MUI)", icon: "🎨", level: 78 },
  { name: "Framer Motion", icon: "✨", level: 82 },
  { name: "TypeScript", icon: "📘", level: 80 },
  { name: "HTML/CSS", icon: "🎨", level: 95 },
  { name: "JavaScript", icon: "🟧", level: 90 },
  { name: "Tailwind CSS", icon: "🌊", level: 88 },
  { name: "SASS/SCSS", icon: "✍️", level: 85 },
  { name: "Bootstrap", icon: "👢", level: 85 }, 
  { name: "GSAP", icon: "🎬", level: 75 }
],
  Backend: [
    { name: "Node.js", icon: "🟩", level: 85 },
    { name: "Express.js", icon: "🚀", level: 80 },
    { name: "REST APIs", icon: "🌐", level: 85 }
  ],
  Database: [
    { name: "MongoDB", icon: "🍃", level: 85 },
    { name: "MySQL", icon: "🐬", level: 80 }
  ],
  Tools: [
    { name: "Git & GitHub", icon: "🔧", level: 90 },
    { name: "VS Code", icon: "💻", level: 95 },
    { name: "Postman", icon: "📮", level: 88 }
  ],
  "AI & ML": [
    { name: "Python ML", icon: "🐍", level: 75 },
    { name: "TensorFlow", icon: "🔢", level: 70 }
  ],
  Cloud: [
    { name: "Firebase", icon: "🔥", level: 80 },
    { name: "AWS", icon: "☁️", level: 70 }
  ],
  Cybersecurity: [
    { name: "Penetration Testing", icon: "🛡️", level: 85 },
    { name: "Vulnerability Assessment", icon: "🔍", level: 80 },
    { name: "OWASP Top 10", icon: "📜", level: 78 },
    { name: "Network Security", icon: "🌐", level: 82 },
    { name: "Threat Analysis", icon: "⚔️", level: 75 }
  ]
};

const SkillandTools = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="skillsandtools-wrapper">
    <section id="skills-tools" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <p className="skills-subtitle">
        I've acquired a diverse set of skills throughout my journey as a developer. 
        Here's a comprehensive overview of my technical expertise.
      </p>

      {/* Category Buttons */}
      <div className="skills-category-buttons">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="skills-grid">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SkillandTools;
