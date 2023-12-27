import React from 'react';
import './about.css';
import about from '../../assets/about.jpg';
import pdfPath from "../../assets/mahmoud-ellabban-resume.pdf";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "mahmoud-ellabban-resume.pdf";
    link.click();
  };
  return (
      <div id="about" className="about">
      <div className="content">
        <h1>About Me</h1>
        <p>Highly motivated and detail-oriented Front-End Developer with a degree in Electronics and Communication Engineering. Possessing a strong foundation in coding and a passion for creating user-friendly and visually appealing websites.</p>
          <ul>
            <li><span ><strong> Birthday : </strong></span><span> 11 September, 1999</span> </li>
            <li><span ><strong> City : </strong></span><span> El-sharkia, Egypt</span> </li>
            <li><span ><strong> Phone Number : </strong> </span><span> +201021382459</span> </li>
            <li><span ><strong> Freelance : </strong></span><span> Available</span> </li>
            <li><span ><strong> E-mail : </strong></span><span> mahmoud.ellabban.7@gmail.com</span> </li>
          </ul>
          <button id='bottone5' onClick={handleDownload}>Download my CV</button>
      </div>
      <div className="image">
        <img src={about} alt="Mahmoud" />
      </div> 
    </div>
  );
};

export default About;