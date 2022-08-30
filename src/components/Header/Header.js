import React, { useEffect, useRef } from "react";
import "./Header.scss";
import { init } from "ityped";
const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  1500,
      startDelay:  500,
      backSpeed:60,
      strings: ["Front-End Developer"],
    });
  }, []);

  return (
    <div id="home" className="header">
      <div className="left">
        <div className="img-container">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="info">
          <h2>Hi, There I am</h2>
          <h1> Hazem Mostafa </h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
