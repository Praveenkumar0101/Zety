
import React, { useState } from 'react';
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';  // Ensure this import is present

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="App">
      <div className='account'>
        <a href='#'>My Account</a>
      </div>
      <div className="navbar">
        

        {/* Repeat for other dropdowns */}
        {/* CV Dropdown */}
       
        {/* Cover Letter Dropdown */}
       
        
        {/* Career Blog Dropdown */}
     

        {/* About Dropdown */}
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">About <i className={`fa ${openDropdown === 'about' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Editorial Guidelines</a>
            <a href="#">Media Mentions</a>
            <a href="#">Press Page</a>
          </div>
        </div>
         
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('career-blog')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Career Blog <i className={`fa ${openDropdown === 'career-blog' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'career-blog' ? 'show' : ''}`}>
            <a href="#">Job Search</a>
            <a href="#">Job Interviews</a>
            <a href="#">Career Advice</a>
            <a href="#">Resume Help</a>
            <a href="#">CV Help</a>
            <a href="#">Cover Letter Help</a>
            <a href="#">Frequently Asked Questions</a>
          </div>
        </div>
          
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('cover-letter')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Cover Letter <i className={`fa ${openDropdown === 'cover-letter' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'cover-letter' ? 'show' : ''}`}>
            <a href="#">Cover Letter Template</a>
            <a href="#">Cover Letter Examples</a>
            <a href="#">Cover Letter Format</a>
            <a href="#">How to Write Cover Letter</a>
            <a href="#">Cover Letter Help</a>
          </div>
        </div>
       
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('cv')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">CV <i className={`fa ${openDropdown === 'cv' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'cv' ? 'show' : ''}`}>
            <a href="#">CV Templates</a>
            <a href="#">CV Examples</a>
            <a href="#">How to Write CV</a>
            <a href="#">CV Help</a>
          </div>
        </div>
        
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Resume <i className={`fa ${openDropdown === 'resume' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'resume' ? 'show' : ''}`}>
            <a href="#">Resume Templates</a>
            <a href="#">Resume Examples</a>
            <a href="#">Resume Format</a>
            <a href="#">How to Write a Resume</a>
            <a href="#">Resume Checker</a>
            <a href="#">Resume Helper</a>
          </div>
        </div>

        {/* Tools Dropdown */}
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('tools')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Tools <i className={`fa ${openDropdown === 'tools' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'tools' ? 'show' : ''}`}>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
            <div className='text'>
            <h3>Resume buuilder</h3>
            <p>Hello world</p>
            </div>
            <div className='move'>
            <img src=''/><h3><a href="#">Resume Checker</a></h3>
            <p>Get your resume cheked and scored with one click </p>
            <h3><a href="#">CV Maker</a></h3>
            <p>create a cv in 5 minutes.get the job you want</p>
           <h3> <a href="#">Cover Letter Builder</a></h3>
           <p>Write a cover letter that convinces employers your the best</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
