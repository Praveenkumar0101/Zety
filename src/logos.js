import React from 'react';
import './CompanyLinks.css';  // Import your CSS file

const CompanyLinks = () => {
  return (
    <div className="company-container">
      <div className='hired'>
      <h3>Our customers have been <br/> hired by:*</h3>
      </div>
      <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.kkNY5vBdK3HMrpTmZ6qA0gHaBl?pid=ImgDet&w=168&h=35.88365172314486&c=7&dpr=1.3" alt="Microsoft" className="company-logo" />
      
      </a>
      <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.StQyiTC4ZdBIwJ3hizFYpwHaCO?pid=ImgDet&w=168&h=50.434355828220866&c=7&dpr=1.3" alt="Amazon" className="company-logo" />
      
      </a>
      <a href="https://www.att.com" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.UPIzG8UfM36-bX_bN_iLgwHaDC?pid=ImgDet&w=168&h=94.5&c=7&dpr=1.3" alt="AT&T" className="company-logo" />
       
      </a>
      <a href="https://www.walmart.com/" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.hdWAqx3qRjCkkIdZiHW0pwHaCI?pid=ImgDet&w=168&h=44.21052631578947&c=7&dpr=1.3" alt="Walmart" className="company-logo" />
      </a>
      <a href="https://www.fedex.com/" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://logohistory.net/wp-content/uploads/2023/05/FedEx-Symbol.png" alt="Fedex" className="company-logo" />
      
      </a>
      <a href="https://www.orange.com/" target="_blank" rel="noopener noreferrer" className="company-link">
        <img src="https://th.bing.com/th/id/OIP.eqDP-aXGorg7eI1CiAvRIgHaCA?rs=1&pid=ImgDetMain" alt="Orange" className="company-logo" />
       
      </a>
      
    </div>
    
  );
};

export default CompanyLinks;
