import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Education
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Experience
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Skills
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>Education</h2>
            <hr />
            <p>
              <li>Computer Science</li>
              <li>College</li>
              <li>High School</li>
              <li>School</li>
            </p>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h2>Experience</h2>
            <hr />
            <p>
              <li>Worked at Google</li>
              <li>Worked at Facebook</li>
              <li>Worked at NetFlix</li>
            </p>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h2>Skills</h2>
            <hr />
            <p>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>Next Js</li>
              <li>MongoDB</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
