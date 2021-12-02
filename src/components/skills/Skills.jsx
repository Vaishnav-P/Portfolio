import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <section className="skills container" id="skills">
      <div className="container-fluid">
        <div className="title">
          <h2>My Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <div className="item-text">
            <span>Python</span>
            <span className="w-85 show-on-scroll">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-85 show-on-scroll"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <span>Java</span>
            <span className="w-68 show-on-scroll">68%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-68 show-on-scroll"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <span>HTML5</span>
            <span className="w-85 show-on-scroll">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-85 show-on-scroll"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <span>CSS3</span>
            <span className="w-80 show-on-scroll">80%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-80 show-on-scroll"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <span>ReactJs</span>
            <span className="w-60 show-on-scroll">60%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-60 show-on-scroll"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <span>PHP</span>
            <span className="w-68 show-on-scroll">68%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-68 show-on-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
