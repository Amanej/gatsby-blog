import React from "react";
import resumeStyles from "../components/css/resume.css"

console.log("resumeStyles ",resumeStyles);
// {data.site.siteMetadata.title}
export default ({data}) => (
  <div>
    <h1>Resume</h1>
    <div className="resume" className={resumeStyles}>
        <div className="header">
            <h2>Fullstack JavaScript Developer</h2>
            <p>Entrepreneurial and business minded web developer. I can design, code, and lead a team to a finished product. Can identify links between business needs and software solutions. Worked in ad agencies and with marketing, so I have become concerned with great pixel perfect products and great experiences.</p>
        </div>
        <div className="leftContainer">
            <div className="personalInfo">
                <h2>Personal info</h2>
                <p>
                    <strong>Address </strong><br/>
                    54 Lafayette Street, San Francisco<br/>
                    <strong>Phone: </strong><br/>
                    +1 415 910 5379 / +47 46 16 46 87 <br/>
                    <strong>Email </strong><br/>
                    aman.mender@solutus.no <br/>
                    <strong>Year of birth</strong><br/>
                    1990<br/>
                </p>
                <a href="https://linkedin.com/profile/aman-mender/">Linkedin</a>      
                <a href="https://linkedin.com/profile/aman-mender/">Facebook</a>      
                <a href="https://linkedin.com/profile/aman-mender/">Instagram</a>      
            </div>
            <div className={resumeStyles.skills}>
                <h2>Skills</h2>
                <ul>
                    <li>
                        <h4>JavaScript</h4>
                        <div className="rating">
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                        </div>
                    </li>
                    <li>
                        <h4>HTML & CSS</h4>
                        <div className="rating">
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="rightContainer">
            <div className="experience"></div>
            <div className="education"></div>
        </div>
    </div>
  </div>
);