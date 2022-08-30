import React from "react";
import { Person, Mail } from "@material-ui/icons";
import "./Navbar.scss";
function Navbar({ openmenu, setOpenMenu }) {
  return (
    <div className={`${openmenu ? "navbar active" : "navbar"}`}>
      <div className="wraper">
        <div className="left">
          <a href="#home" className="logo">
            Ha<span>zem</span>
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+20 1156734038</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>hazem77mostafa90@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div onClick={() => setOpenMenu(!openmenu)} className="bars">
            <span className="l1"></span>
            <span className="l2"></span>
            <span className="l3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
