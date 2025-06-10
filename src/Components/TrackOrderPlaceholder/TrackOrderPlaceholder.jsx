import { useState } from 'react';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import './TrackOrderPlaceholder.css';

const TrackOrderPlaceholder = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="track-order-container">
      <div className="maintenance-illustration">
        <div className="gear gear-1"></div>
        <div className="gear gear-2"></div>
        <div className="gear gear-3"></div>
        <div className="tools"></div>
      </div>

      <h1 className="title">Order Tracking Under Maintenance</h1>
      <p className="subtitle">
        We're upgrading our order tracking system for a better experience!
      </p>

      <div className="contact-card">
        <h2>Get Your Order Status</h2>
        <p>Reach out to us directly:</p>
        
        <div className="contact-methods">
          <a 
            href="https://instagram.com/framerang" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`instagram-btn ${isHovered ? 'pulse' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FiInstagram className="icon" />
            <span>@framerang</span>
          </a>
          
          <div className="secondary-contacts">
            <a href="mailto:framerang@gmail.com" className="contact-link">
              <FiMail className="icon" />
              framerang@gmail.com
            </a>
            <a href="tel:+919876543210" className="contact-link">
              <FiPhone className="icon" />
              +91 7850045567
            </a>
          </div>
        </div>
      </div>

      <div className="progress-container">
        <p>System upgrade progress:</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}></div>
        </div>
        <span className="progress-text">75% completed</span>
      </div>
    </div>
  );
};

export default TrackOrderPlaceholder;