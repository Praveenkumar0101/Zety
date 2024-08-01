import React from 'react';
import './CompanyLinks.css';  // Import your CSS file

const CompanyLinks = () => {
  return (
    <div className="company-container">
      <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.olOnH8y5yZLeWr0g27wxbgHaE4?w=728&h=480&rs=1&pid=ImgDetMain" alt="Microsoft" className="company-logo" />
        <div className="company-name">Microsoft</div>
      </a>
      <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://image.freepik.com/free-icon/amazon-logo_318-55469.jpg" alt="Amazon" className="company-logo" />
        <div className="company-name">Amazon</div>
      </a>
      <a href="https://www.att.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://seeklogo.com/images/A/AT_and_T-logo-7691ACC057-seeklogo.com.png" alt="AT&T" className="company-logo" />
        <div className="company-name">AT&T</div>
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="path-to-logo/google.png" alt="Google" className="company-logo" />
        <div className="company-name">Google</div>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="path-to-logo/facebook.png" alt="Facebook" className="company-logo" />
        <div className="company-name">Facebook</div>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="path-to-logo/twitter.png" alt="Twitter" className="company-logo" />
        <div className="company-name">Twitter</div>
      </a>
    </div>
  );
};

export default CompanyLinks;
