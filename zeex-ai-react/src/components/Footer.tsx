// Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">Z</div>
              <span className="logo-text">ZeexAI</span>
            </div>
            <p className="brand-description">
              Harnessing the power of data and artificial intelligence, Zeex AI empowers organizations 
              to predict risks, ensure safety, and optimize daily operations—before issues escalate.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="links-title">Quick Links</h3>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Solutions</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h3 className="links-title">Our Services</h3>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Retail & High-Risk Shop Security</a></li>
              <li><a href="#" className="footer-link">Bank & ATM Security Solutions</a></li>
              <li><a href="#" className="footer-link">Industrial Safety Monitoring</a></li>
              <li><a href="#" className="footer-link">Smart City Surveillance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="links-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+918709221636" className="footer-link">+91 8709221636</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:admin@zeexai.com" className="footer-link">admin@zeexai.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="address">Nirmaan, CFI, IIT Madras</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter">
              <h4 className="newsletter-title">Stay Updated</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} ZeexAI. All rights reserved.
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-background">
        <div className="footer-shape shape-1"></div>
        <div className="footer-shape shape-2"></div>
        <div className="footer-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;