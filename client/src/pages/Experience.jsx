import React from "react";
import "../Styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Experience & Education</h2>

      <div className="experience-container">
        {/* Work Experience */}
        <div className="experience-column">
          <h3 className="column-heading">Work Experience</h3>
          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h4>Web Penteration testing Intern</h4>
                <span className="company">Securetackles</span>
                <span className="duration">July 2025 - Present</span>
                <ul>
                  <li>
                    Practical Web Penetration Testing – Gaining hands-on
                    experience in identifying, exploiting, and documenting web
                    vulnerabilities using industry-standard tools like Burp
                    Suite and following OWASP Top 10 methodologies.
                  </li>
                  <li>
                    Cybersecurity Fundamentals & Reporting – Learning to conduct
                    vulnerability assessments, apply secure coding practices,
                    and craft professional penetration testing reports with
                    remediation guidelines.
                  </li>
                  <li>
                    Professional Mentorship & Industry Exposure – Working under
                    experienced cybersecurity consultants, enhancing technical
                    skills, and developing analytical thinking and ethical
                    hacking expertise in a collaborative, real-world
                    environment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h4>.Net Developer Intern</h4>
                <span className="company">Jilansoft</span>
                <span className="duration">Aug 2024 - Sep 2024</span>
                <ul>
                  <li>
                    Full-stack development experience – Worked on a real-world
                    Hospital Management System, contributing to modules ranging
                    from patient status to finance & billing, using C# (VS 2019)
                    for frontend and backend with SQL for database management.
                  </li>
                  <li>
                    Technical growth – Gained hands-on experience with API
                    integrations (Axios) and understanding of how
                    enterprise-level software systems are designed, built, and
                    maintained.
                  </li>
                  <li>
                    Professional skills – Improved communication, teamwork, and
                    collaboration while working in a real-world development
                    environment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="experience-column">
          <h3 className="column-heading">Education</h3>
          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h4>Bachelor of Science in Software Engineering</h4>
                <span className="company">
                  Bahria University Karachi Campus
                </span>
                <span className="duration">Sep 2022 - June 2026</span>
                <p>
                  Building expertise in programming, algorithms, and data
                  structures while enhancing teamwork and communication skills.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h4>Intermediate – Pre Engineering</h4>
                <span className="company">Bahria College Karsaz</span>
                <span className="duration">Aug 2020 - Apr 2022</span>
                <p>
                  Developed a solid background in science and mathematics,
                  establishing a strong base for a career in computer science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
