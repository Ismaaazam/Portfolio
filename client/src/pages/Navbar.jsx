import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/mylogo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skillsandtools", label: "Skills & Tools" },
    { id: "services", label: "Services" },
    { id: "project", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact Me ↗", contact: true },
  ];

  return (
    <>
      <nav className="navbar">
        {/* Logo and Name */}
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="nav-name">
            Ismaa <span className="nav-name-highlight">Azam</span>
          </h2>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ id, label, contact }) => (
            <li key={id} className={activeSection === id ? "active" : ""}>
              <a
                href={`#${id}`}
                className={`nav-link-text ${contact ? "contact-link-text" : ""}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
