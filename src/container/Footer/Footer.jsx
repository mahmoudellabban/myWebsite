import React from "react";
import {BsGithub, BsLinkedin, BsFacebook, BsInstagram} from "react-icons/bs"
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://github.com/mahmoudellabban" target= "blank" ><BsGithub /></a>
          <a href="https://www.linkedin.com/in/mahmoud-ellabban/" target="blank"><BsLinkedin /></a>
          <a href="https://www.facebook.com/mahmoud.ellabban.7" target='blank'> <BsFacebook /> </a>
          <a href="https://www.instagram.com/mahmoud.ellabban.74/" target='blank'> <BsInstagram /> </a>
        </div>
        <div className="footer-content">
          <p className="footer-description">© 2024 <strong>Mahmoud Ellabban.</strong> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;