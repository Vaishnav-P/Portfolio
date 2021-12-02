import React from "react";
import "./intro.css";
import Dp from "../../image/Dp.png";
import "bootstrap/dist/css/bootstrap.css";
const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Vaishnav Parakkunath</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Writer</div>
            </div>
          </div>
          <div className="i-desc">
            <blockquote className="blockquote pb-2">
              All you need in this life is ignorance and confidence, and then
              success is sure.
            </blockquote>
            <figcaption className="blockquote-footer mb-0 font-italic">
              Mark Twain
            </figcaption>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Dp} alt="" className="i-img"></img>
      </div>
    </div>
  );
};

export default Intro;
