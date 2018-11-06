import React from "react";
import aman from '../../static/aman.jpg';
import aboutStyles from "../components/css/about.css"

function ProfileImage() {
  // Import result is the URL of your image
  return <img className={aboutStyles.profileImage} src={aman} alt="Aman" />;
}

export default ProfileImage;
