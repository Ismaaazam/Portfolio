import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa'; // For the "scroll to top" arrow
import '../Styles/Footer.css'; // Importing footer styles
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section footer-about">
                    <h2>Ismaa <span className="ismaa-text">Azam</span></h2>
                    <p>Full Stack Developer & Cyber Security Enthusiast specializing in creating exceptional digital experiences that combine beautiful design with powerful functionality.</p>
                    <div className="footer-social-icons">
                        <a href="https://github.com/Ismaaazam" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/ismaa-azam-10b958312/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/ismaa_azam_bajwa?igsh=MXY1Z3VndHZ1ZzQ2ag==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:ismaaazam090@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>

                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills-tools">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">Mobile App Development</a></li>
                        <li><a href="#services">UI/UX Design</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-contact">
                    <h3>Contact</h3>
                    <p>Karachi, Pakistan</p>
                    <p>ismaaazam090@gmail.com</p>
                    <p>+92 3308513546</p>
                    <button className="contact-button" onClick={() => window.location.href = 'mailto:ismaaazam090@gmail.com'}>Get in Touch</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Ismaa Azam. All rights reserved.</p>
                <div className="footer-legal-links">
                    <a href="#privacy-policy">Privacy Policy</a>
                    <a href="#terms-of-service">Terms of Service</a>
                    <a href="#sitemap">Sitemap</a>
                </div>
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            </div>
            
        </footer>
    );
};

export default Footer;