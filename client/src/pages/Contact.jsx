import React, { useState } from "react";
import "../Styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+92",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required.";

    // Gmail validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid Gmail address.";

    // Phone validation (country code + number)
    const phoneRegex = /^[0-9]{7,12}$/;
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    // Message validation
    const wordCount = formData.message.trim().split(/\s+/).length;
    if (wordCount > 300) newErrors.message = "Message cannot exceed 300 words.";
    if (/<[^>]*script|<\/script>/i.test(formData.message))
      newErrors.message = "Malicious code not allowed.";

    if (!formData.agree)
      newErrors.agree = "You must agree to the Privacy Policy.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-heading">Contact</h2>
        <h3 className="contact-title">Let's Get In Touch.</h3>
        <p className="contact-subtitle">
          Or just reach out manually to{" "}
          <a href="mailto:ismaaazam090@gmail.com">ismaaazam090@gmail.com</a>
        </p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-with-icon">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <FaEnvelope className="form-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Gmail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <div className="phone-input-wrapper">
              <div className="input-with-icon">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="country-code-select"
                >
                  <option value="">Code</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+92">+92 (PK)</option>
                  <option value="+91">+91 (IN)</option>
                </select>
              </div>
              <div className="input-with-icon phone-input">
                <FaPhoneAlt className="form-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!formData.countryCode}
                />
              </div>
            </div>
            {errors.phone && (
              <small className="error-text">{errors.phone}</small>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;