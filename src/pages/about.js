import React from "react";
import ProfileImage from '../components/profileImage';
import aboutStyles from "../components/css/about.css"
//console.log("About styles ",aboutStyles);

export default ({data}) => (
  <div>
    <h1>About</h1>
    <ProfileImage></ProfileImage>
    <p className={aboutStyles.aboutText}>
      Hi, my name is Aman. I am 28 years old developer entrepreneur, and aspiring tinker.
      I want to tinker with the universe, and everything it has to offer.
    </p>
    <a className={aboutStyles.aboutLink} href="https://www.linkedin.com/in/aman-mender-92681b13/">LinkedIn</a>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
