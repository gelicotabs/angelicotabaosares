import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/0.jpg';
import cv from '../assets/Angelico Tabaosares Resume 2025.pdf';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gelicotabs" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/angelico-tabaosares-7b928a184/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={cv} target="_blank"  rel="noreferrer"><AssignmentIndIcon/></a>
          </div>
          <h1>Angelico Tabaosares</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/gelicotabs" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/angelico-tabaosares-7b928a184/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
