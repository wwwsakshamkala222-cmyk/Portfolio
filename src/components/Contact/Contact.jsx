import React, { useState } from 'react';
import { FaEnvelope,FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { sendEmail } from '../../Services/emailServices'; 
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({
        loading: false,
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: '', type: '' });
      }, 5000);
    } else {
      setStatus({
        loading: false,
        message: 'Oops! Something went wrong. Please try again or email me directly.',
        type: 'error',
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <p>CONTACT</p>
      <h1>Get in Touch with Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>I'm always open to discuss exciting projects and new opportunities. Let's collaborate!</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <span>sakshamkala111@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>India</span>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/wwwsakshamkala222-cmyk"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saksham-kala-558776288/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sakshamkala111@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.loading}
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn-send" disabled={status.loading}>
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;