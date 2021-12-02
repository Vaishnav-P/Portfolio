import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

const time = 1000;
const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/vaishnav-p-996206225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeOQnfO7XSIi8g%2BMskiGJPw%3D%3D"
            target="_blank"
          >
            <i className="icon ion-social-linkedin"></i>
          </a>
          <a href="https://github.com/Vaishnav-P" target="blank">
            <i className="icon ion-social-github"></i>
          </a>
          <a
            href="https://www.facebook.com/vaishnav.parakkunnath"
            target="blank"
          >
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <Link
            className="list-inline-item"
            to="intro"
            smooth={true}
            duration={time}
          >
            Home
          </Link>
          <Link
            className="list-inline-item"
            to="about"
            smooth={true}
            duration={time}
          >
            About
          </Link>
          <Link
            className="list-inline-item"
            to="skills"
            smooth={true}
            duration={time}
          >
            Skills
          </Link>
          <Link
            className="list-inline-item"
            to="contact"
            smooth={true}
            duration={time}
          >
            Contact
          </Link>
        </ul>
        <p className="copyright">copyright © 2021</p>
      </footer>
    </div>
  );
};

export default Footer;
