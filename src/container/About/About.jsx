import React from "react";
import "./about.css";
import about from "../../assets/about.jpg";
import pdfPath from "../../assets/Mahmoud Ellabban.pdf";

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
        <p>
          Highly motivated and detail-oriented Front-End Developer with a degree
          in Electronics and Communication Engineering. Possessing a strong
          foundation in coding and a passion for creating user-friendly and
          visually appealing websites.
        </p>
        <p>
          I hold a bachelor's degree in Electronics and Communication
          Engineering, which has provided me with a strong foundation in
          problem-solving and analytical skills. During my academic journey, I
          discovered my passion for the intersection of electronics and
          software, which led me to transition into the field of software
          development.
        </p>
        <p>
          After completing my degree, I transitioned into the field of software
          development, specifically focusing on front-end development. I find
          the dynamic nature of web development both challenging and exciting,
          and I enjoy creating user-friendly and visually appealing interfaces.
        </p>
        <p>
          In my previous roles, I've had the opportunity to work on diverse
          projects, where I honed my skills in React, JavaScript, and other
          front-end technologies. I am passionate about staying updated with the
          latest trends and best practices in web development to deliver
          high-quality solutions.
        </p>
        <p>
          I believe my background in electronics and communication engineering,
          combined with my experience in React development, equips me with a
          unique perspective and a solid foundation for contributing effectively
          to innovative projects.
        </p>
      </div>
      <div className="image">
        <img src={about} alt="Mahmoud" />
        <div className="content">
          <ul>
            <li>
              <span>
                <strong> Birthday : </strong>
              </span>
              <span> 11 September, 1999</span>{" "}
            </li>
            <li>
              <span>
                <strong> City : </strong>
              </span>
              <span> El-sharkia, Egypt</span>{" "}
            </li>
            <li>
              <span>
                <strong> Phone Number : </strong>{" "}
              </span>
              <span> +201021382459</span>{" "}
            </li>
            <li>
              <span>
                <strong> Freelance : </strong>
              </span>
              <span> Available</span>{" "}
            </li>
            <li>
              <span>
                <strong> E-mail : </strong>
              </span>
              <span> mahmoud.ellabban.7@gmail.com</span>{" "}
            </li>
          </ul>
          <button id="bottone5" onClick={handleDownload}>
            Download my CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
