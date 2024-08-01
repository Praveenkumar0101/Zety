
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
        

        
     

        {/* About Dropdown */}
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">About <i className={`fa ${openDropdown === 'about' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
          <a href=''><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>About</h3>
          <p>Find out more about zety and  it's <br/> <span style={{marginLeft:"12px"}}> career experts.Get the job you want</span></p>
           
          </div>
          <div className='about'>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" />Pricing</a>
            <p>Explore our Pricing options</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" />Contact</a>
            <p>Our customer servce team is ready to help</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" />Editorial Guidelines</a>
            <p>Learn how our experts create our content</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" />Media Mentions</a>
            <p>Discover where our work has been featured in</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" />Press Page</a>
            <p>Read orginal data insides to boost your reporting</p>
          </div>
        </div>
        </div>
         
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('career-blog')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Career Blog <i className={`fa ${openDropdown === 'career-blog' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'career-blog' ? 'show' : ''}`}>
          <a href=''><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>See all posts</h3>
          <p>Find out how can you get a new job or improve <br/><span style={{marginLeft:"15px"}}>the one you have</span></p>
           
          </div>

          <div className='career-blog'>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Job Search </a>
           <p> Learn how to find the right job and get it</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Job Interviews</a>
            <p>Prepare for any interview and ace it</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Career Advice</a>
            <p>Improve your career with expert tips and strategies</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Resume Help</a>
            <p>Improve your resume with help from expert guides</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> CV Help</a>
            <p>Improve your cv with help from expert guides</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Cover Letter Help</a>
            <p>Boost your chances of having your resume read with our help</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /> Frequently Asked Questions</a>
            <p>Get answers to Frequently asked questions about resumes, Zety, and more</p>
          </div>
        </div>
        </div>

        <div className="dropdown" onMouseEnter={() => handleMouseEnter('cover-letter')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Cover Letter <i className={`fa ${openDropdown === 'cover-letter' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'cover-letter' ? 'show' : ''}`}>
          <a href=''><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>cover letter Builder</h3>
          <p>Create a Cover in 5 minutes.<br/><span style={{marginLeft:"15px"}}>Get the job you want</span></p>
           
          </div>
          <div className='cover-letter'>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>Cover Letter Template</a>
            <p>Find the perfect cover letter</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>Cover Letter Examples</a>
            <p>see perfect cover letter samples that gets jobs</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>Cover Letter Format</a>
              <p>pick the right format for your situation</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>How to Write Cover Letter</a>
             <p>Learn how to write a  cover letter that gets jobs</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>Cover Letter Help</a>
            <p>Boost your chances of having your resume read with our help</p>
            <div className="cover-letter-button">
        <a href="#" className="button">Create Your Cover letter Now</a>
      </div>
          </div>
        </div>
        </div>
       
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('cv')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">CV <i className={`fa ${openDropdown === 'cv' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'cv' ? 'show' : ''}`}>
          <a href=''><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>CV buuilder</h3>
          <p>Create a cv in 5 minutes.Get the job you want</p>
           
          </div>
          <div className='cv'>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>CV Templates</a>
            <p>Find the  perfeect cv template</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>CV Examples</a>
            <p>See perfect resume samples.that get jobs</p>
            <a href=''><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>CV format</a>
            <p>Pick the right format for your situation</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>How to Write CV</a>
            <p>Learn how to write a cv that gets interviews</p>
            <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg'/>CV Help</a>
            <p>pick the right resume format for your situation</p>
            <div className="cv-button">
        <a href="#" className="button">Create Your CV now</a>
      </div>

          </div>
        </div>
        </div>
        
     {/* Resume */}
     <div className="dropdown" onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
  <button className="dropbtn">Resume <i className={`fa ${openDropdown === 'resume' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
  <div className={`dropdown-content ${openDropdown === 'resume' ? 'show' : ''}`}>
    <a href=''><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
    <div className='text'>
      <h3>Resume Builder</h3>
      <p>Create a resume in 5 minutes. <br/> <span style={{marginLeft:"15px"}}>Get the job you want</span></p>
    </div>
    <div className='Resume'>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="Resume Templates"/> Resume Templates</a>
      <p>Find the perfect resume template</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="Resume Examples"/> Resume Examples</a>
      <p>See perfect resume samples that get jobs</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="Resume Format"/> Resume Format</a>
      <p>Pick the right resume format for your situation</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="How to Write a Resume"/> How to Write a Resume</a>
      <p>Learn how to make a resume that gets interviews</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="Resume Checker"/> Resume Checker</a>
      <p>Get your resume checked and scored with one click</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="Resume Helper"/> Resume Helper</a>
      <p>Improve your resume with help from expert guides</p>
      <div className="resume-button">
        <a href="#" className="button">Create Your Resume Now</a>
      </div>
    </div>
  </div>
</div>


        {/* Tools Dropdown */}
        <div className="dropdown" onMouseEnter={() => handleMouseEnter('tools')} onMouseLeave={handleMouseLeave}>
  <button className="dropbtn">Tools <i className={`fa ${openDropdown === 'tools' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
  <div className={`dropdown-content ${openDropdown === 'tools' ? 'show' : ''}`}>
    <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/1876/1876460.png' alt="Tools Icon" /></a>
    <div className='text'>
      <h3>Resume Builder</h3>
      <p>Create a resume in 5 minutes.<br/>  <span style={{marginLeft:"15px"}}> Get the job you want</span></p>
    </div>
    <div className='tools'>
      <a href="#"><img src='https://www.pinclipart.com/picdir/middle/105-1051003_resume-png-transparent-images-resume-icon-png-white.png' alt="Resume Checker" /><h3>Resume Checker</h3></a>
      <p>Get your resume checked and scored with one click</p>
      <a href="#"><img src='https://icon-library.com/images/resume-icon/resume-icon-16.jpg' alt="CV Maker" /><h3>CV Maker</h3></a>
      <p>Create a CV in 5 minutes. Get the job you want</p>
      <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/10261/10261653.png' alt="Cover Letter Builder" /><h3>Cover Letter Builder</h3></a>
      <p>Write a cover letter that convinces employers you're the best</p>
    </div>
  </div>
</div>

      </div>

      <div className='zety'>
      <a href=''><img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/58a851be0000ff00059ce9cb/0x0.png'/></a>
      </div>

    </div>
  );
}

export default Navbar;
