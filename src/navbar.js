
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
          <a href=''><img src='https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/sms_text_protocol_message-1024.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>About</h3>
          <p>Find out more about zety and  it's <br/> <span style={{marginLeft:"12px"}}> career experts.Get the job you want</span></p>
           
          </div>
          {/* <div className='about'>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.LQEJATS7RP7HIZkQmgr2HgHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" />Pricing</a>
            <p>Explore our Pricing options</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.UvqagJOkjSpzXYZcT5K-lQHaHF?rs=1&pid=ImgDetMain' alt="Tools Icon" />Contact</a>
            <p>Our customer servce team is ready to help</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.GWcyurPnyjxuij5yXRjxNAHaHN?rs=1&pid=ImgDetMain' alt="Tools Icon" />Editorial Guidelines</a>
            <p>Learn how our experts create our content</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.3iMERZcKR0bDNyz4aARCyQHaE0?rs=1&pid=ImgDetMain' alt="Tools Icon" />Media Mentions</a>
            <p>Discover where our work has been featured in</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.KP_wS6-4sBh5BkxXUhDOSQHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" />Press Page</a>
            <p>Read orginal data insides to boost your reporting</p>
          </div>
        </div>
        </div> */}


<div className='about'>
          <a href="#">
            <img src='https://th.bing.com/th/id/OIP.LQEJATS7RP7HIZkQmgr2HgHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" />
            <span>
              Pricing
              <p>Explore our Pricing options</p>
            </span>
          </a>
          <a href="#">
            <img src='https://th.bing.com/th/id/OIP.UvqagJOkjSpzXYZcT5K-lQHaHF?rs=1&pid=ImgDetMain' alt="Tools Icon" />
            <span>
              Contact
              <p>Our customer service team is ready to help</p>
            </span>
          </a>
          <a href="#">
            <img src='https://th.bing.com/th/id/OIP.GWcyurPnyjxuij5yXRjxNAHaHN?rs=1&pid=ImgDetMain' alt="Tools Icon" />
            <span>
              Editorial Guidelines
              <p>Learn how our experts create our content</p>
            </span>
          </a>
          <a href="#">
            <img src='https://th.bing.com/th/id/OIP.3iMERZcKR0bDNyz4aARCyQHaE0?rs=1&pid=ImgDetMain' alt="Tools Icon" />
            <span>
              Media Mentions
              <p>Discover where our work has been featured in</p>
            </span>
          </a>
          <a href="#">
            <img src='https://th.bing.com/th/id/OIP.KP_wS6-4sBh5BkxXUhDOSQHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" />
            <span>
              Press Page
              <p>Read original data insights to boost your reporting</p>
            </span>
          </a>
        </div>
      </div>
    </div>

        <div className="dropdown" onMouseEnter={() => handleMouseEnter('career-blog')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Career Blog <i className={`fa ${openDropdown === 'career-blog' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'career-blog' ? 'show' : ''}`}>
          <a href=''><img src='https://th.bing.com/th/id/OIP.SGFg3Ej3d0YmQVCfKlBZPwHaI_?rs=1&pid=ImgDetMain' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>See all posts</h3>
          <p>Find out how can you get a new job or improve <br/><span style={{marginLeft:"15px"}}>the one you have</span></p>
           
          </div>

          <div className='career-blog'>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.SgTGPQP4T7hUJ5cigKpl2wHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" /> Job Search </a>
           <p> Learn how to find the right job and get it</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.Zjw87n1xnFlnnIq83VfavAAAAA?rs=1&pid=ImgDetMain' alt="Tools Icon" /> Job Interviews</a>
            <p>Prepare for any interview and ace it</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.lszbfCy70c-L7WqLg1lyOwHaHa?rs=1&pid=ImgDetMain' alt="Tools Icon" /> Career Advice</a>
            <p>Improve your career with expert tips and strategies</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/9740/9740095.png' alt="Tools Icon" /> Resume Help</a>
            <p>Improve your resume with help from expert guides</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.4p-rOOfacPN8VOIN9jLlAAHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain' alt="Tools Icon" /> CV Help</a>
            <p>Improve your cv with help from expert guides</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/7502/7502750.png' alt="Tools Icon" /> Cover Letter Help</a>
            <p>Boost your chances of having your resume read with our help</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.wZDLq8JOZv-kbqUYJxSoXgHaHa?w=512&h=512&rs=1&pid=ImgDetMain' alt="Tools Icon" /> Frequently Asked Questions</a>
            <p>Get answers to Frequently asked questions about resumes, Zety, and more</p>
          </div>
        </div>
        </div>

        <div className="dropdown" onMouseEnter={() => handleMouseEnter('cover-letter')} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Cover Letter <i className={`fa ${openDropdown === 'cover-letter' ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>
          <div className={`dropdown-content ${openDropdown === 'cover-letter' ? 'show' : ''}`}>
          <a href=''><img src='https://cdn-icons-png.flaticon.com/512/8212/8212266.png' alt="Tools Icon" /></a>
          <div className='text'>
          
          <h3>cover letter Builder</h3>
          <p>Create a Cover in 5 minutes.<br/><span style={{marginLeft:"15px"}}>Get the job you want</span></p>
           
          </div>
          <div className='cover-letter'>
            <a href="#"><img src='https://workwriteservices.b-cdn.net/wp-content/uploads/2021/08/Cover-Letters-Icon-Green@2x.png'/>Cover Letter Template</a>
            <p>Find the perfect cover letter</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/10577/10577960.png'/>Cover Letter Examples</a>
            <p>see perfect cover letter samples that gets jobs</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.D8SIET8TZsQgYAIEvdUArwHaHY?w=1205&h=1200&rs=1&pid=ImgDetMain'/>Cover Letter Format</a>
              <p>pick the right format for your situation</p>
            <a href="#"><img src='https://th.bing.com/th/id/OIP.RJPFwSM0QMQyaaprABs7OAHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3'/>How to Write Cover Letter</a>
             <p>Learn how to write a  cover letter that gets jobs</p>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/7921/7921397.png'/>Cover Letter Help</a>
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
            <a href="#"><img src='https://i0.wp.com/www.titanui.com/wp-content/uploads/2016/03/05/Minimal-Clean-Resume-CV-Template-With-Icons-PSD.jpg?resize=660%2C487'/>CV Templates</a>
            <p>Find the  perfeect cv template</p>
            <a href="#"><img src='https://e7.pngegg.com/pngimages/135/434/png-clipart-computer-icons-curriculum-vitae-resume-icon-cv-template-blue.png'/>CV Examples</a>
            <p>See perfect resume samples.that get jobs</p>
            <a href=''><img src='https://th.bing.com/th/id/OIP.f437g3CFf0fh9fedcqEzXwHaHa?rs=1&pid=ImgDetMain'/>CV format</a>
            <p>Pick the right format for your situation</p>
            <a href="#"><img src='https://thumbs.dreamstime.com/b/cv-writing-job-application-resume-icon-vector-graphics-various-use-187075484.jpg'/>How to Write CV</a>
            <p>Learn how to write a cv that gets interviews</p>
            <a href="#"><img src='https://p1.hiclipart.com/preview/457/92/957/resume-icon-help-and-support-icon-account-icon-line-electric-blue-symbol-logo-png-clipart.jpg'/>CV Help</a>
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
      <a href="#"><img src='https://th.bing.com/th/id/OIP._iEFVz20Vq8dixqJd4oergHaHa?rs=1&pid=ImgDetMain' alt="Resume Templates"/> Resume Templates</a>
      <p>Find the perfect resume template</p>
      <a href="#"><img src='https://cdn3.iconfinder.com/data/icons/online-job-search/500/vab1175_17_resume_job_paper_isometric-512.png' alt="Resume Examples"/> Resume Examples</a>
      <p>See perfect resume samples that get jobs</p>
      <a href="#"><img src='https://www.clipartkey.com/mpngs/m/51-510700_resume-and-cover-letter-icon.png' alt="Resume Format"/> Resume Format</a>
      <p>Pick the right resume format for your situation</p>
      <a href="#"><img src='https://th.bing.com/th/id/OIP.5jUdAXiJqStCqNn8NcGIoQHaHR?rs=1&pid=ImgDetMain' alt="How to Write a Resume"/> How to Write a Resume</a>
      <p>Learn how to make a resume that gets interviews</p>
      <a href="#"><img src='https://th.bing.com/th/id/OIP.QGu3rvpiDwqEnPUE8CVGIQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain' alt="Resume Checker"/> Resume Checker</a>
      <p>Get your resume checked and scored with one click</p>
      <a href="#"><img src='https://img.freepik.com/premium-vector/resume-icon-set-searching-job-selecting-staff-searching-professional-staff-analyzing-personnel-resume-resume-form-concept-employment-vector-isolated-white-background-eps-10_399089-1024.jpg?w=1380' alt="Resume Helper"/> Resume Helper</a>
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
